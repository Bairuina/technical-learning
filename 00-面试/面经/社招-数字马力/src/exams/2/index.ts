import { isEqual } from "lodash-es";

/**
 * 第二题
 */

// 核心用户请求
let _requestTime = 0;
const requestUserInfo = () => {
  console.log("方法调用");
  // 这个方法的实现不能修改
  return Promise.resolve().then(() => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        // 模拟 ajax 异步，1s 返回
        resolve();
      }, 5000);
    }).then(() => {
      _requestTime++;
      return {
        nick: "nick",
        age: "18",
      };
    });
  });
};

// let requestCache: any = null;
// let isRequesting: boolean = false;
// let count = 0;
// // 这种写法会造成内存泄漏。。。
// const getUserInfo = () => {
//   console.log(
//     "%c [ count++; ]-32",
//     "font-size:14px; background:#000; color:#fff;",
//     count++
//   );
//   // -------- 在这里完成代码 --------
//   // 这里调用 requestUserInfo，并优化请求次数
//   return new Promise((resolve, reject) => {
//     if (requestCache) {
//       resolve(requestCache);
//     }
//     if (!isRequesting) {
//       isRequesting = true;
//       return requestUserInfo().then(
//         (value) => {
//           isRequesting = false;
//           requestCache = value;
//           resolve(value);
//         },
//         () => {
//           isRequesting = false;
//           console.log("请求失败");
//           reject();
//         }
//       );
//     } else {
//       setTimeout(() => {
//         resolve(getUserInfo());
//       });
//     }
//   });
// };

let requestCache: any = null;
const getUserInfo = () => {
  console.log(
    "%c [ getUserInfo ]-68",
    "font-size:14px; background:#000; color:#fff;",
    "getUserInfo"
  );
  // -------- 在这里完成代码 --------

  // 这里调用 requestUserInfo，并优化请求次数
  requestCache = requestCache || requestUserInfo();

  return requestCache;
};
/**
 * 以下为测试用例，无需修改
 */
export default async () => {
  try {
    await Promise.all([getUserInfo(), getUserInfo()]).then((result) => {
      console.log("result2", result);
      if (
        !isEqual(result, [
          {
            nick: "nick",
            age: "18",
          },
          {
            nick: "nick",
            age: "18",
          },
        ])
      ) {
        throw new Error("Wrong answer");
      }
    });
    console.log("_requestTime2", _requestTime);
    return _requestTime === 1;
  } catch (err) {
    console.warn("测试运行失败");
    console.error(err);
    return false;
  }
};
