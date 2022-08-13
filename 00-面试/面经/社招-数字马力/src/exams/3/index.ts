/**
 * 第三题
 */
import { isEqual } from "lodash-es";

// 核心用户请求
let _requestTime = 0;
const requestProfile = (uid: string) => {
  // 这个方法的实现不能修改
  return Promise.resolve().then(() => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        // 模拟 ajax 异步，1s 返回
        resolve();
      }, 1000);
    }).then(() => {
      _requestTime++;
      return {
        uid,
        nick: `nick-${uid}`,
        age: "18",
      };
    });
  });
};

/**
 *
 * @param uid uid
 * @param max 最多并发请求数量
 */
let requestingCount: number = 0; // 正在请求的数量
let requestResultMap: any = new Map(); // 已经请求过的结果缓存；
const requestUserProfile = (uid = "1", max = 2) => {
  // 这里调用requestProfile 进行优化
  return new Promise((resolve) => {
    if (requestResultMap.has(uid)) {
      resolve(requestResultMap.get(uid));
    }
    if (requestingCount < max) {
      requestingCount++;
      return requestProfile(uid).then((value) => {
        requestingCount--;
        requestResultMap.set(uid, value);
        resolve(value);
      });
    } else {
      setTimeout(() => {
        resolve(requestUserProfile(uid));
      });
    }
  });
};
/**
/**
 * 以下为测试用例，无需修改
 */
export default async () => {
  try {
    const star = Date.now();
    await Promise.all([
      requestUserProfile("1"),
      requestUserProfile("2"),
      requestUserProfile("3"),
      requestUserProfile("1"),
    ]).then((result) => {
      console.log("result3", result);
      if (Date.now() - star < 2000 || Date.now() - star >= 3000) {
        throw new Error("Wrong answer");
      }
      if (
        !isEqual(result, [
          {
            uid: "1",
            nick: "nick-1",
            age: "18",
          },
          {
            uid: "2",
            nick: "nick-2",
            age: "18",
          },
          {
            uid: "3",
            nick: "nick-3",
            age: "18",
          },
          {
            uid: "1",
            nick: "nick-1",
            age: "18",
          },
        ])
      ) {
        throw new Error("Wrong answer");
      }
    });
    console.log("_requestTime3", _requestTime);
    return _requestTime === 3;
  } catch (err) {
    console.warn("测试运行失败");
    console.error(err);
    return false;
  }
};
