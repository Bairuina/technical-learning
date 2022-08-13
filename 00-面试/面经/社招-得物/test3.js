/*********************第 3 题**********************
实现⼀个异步任务处理函数，函数第⼀个参数asyncTasks代表需要处理的任务列表，
第⼆个参数n代表可以同时发起的任务数。所有任务完成后把处理结果按顺序放在数组⾥返回
⼊参格式参考:
const asyncTask1 = () => new Promise((resolve) => setTimeout(() => {
console.log('resolve task 1');
resolve();
}, 1000))
const asyncTask2 = () => new Promise((resolve) => setTimeout(() => {
console.log('resolve task 2');
resolve();
}, 2000))
const asyncTask3 = () => new Promise((resolve) => setTimeout(() => {
console.log('resolve task 3');
resolve();
}, 2000))
const asyncTasks = [asyncTask1, asyncTask2, asyncTask3]
handleAsyncTasks(asyncTasks, 2)
// 等待1s
// > resolve task 1
// 等待1s
// > resolve task 2
// 等待1s
// > resolve task 3
*/
const asyncTask1 = () => new Promise((resolve) => setTimeout(() => {
    console.log('resolve task 1');
    resolve(1);
}, 1000))
const asyncTask2 = () => new Promise((resolve) => setTimeout(() => {
    console.log('resolve task 2');
    resolve(2);
}, 3000))
const asyncTask3 = () => new Promise((resolve) => setTimeout(() => {
    console.log('resolve task 3');
    resolve(3);
}, 1000))
const asyncTasks = [asyncTask1, asyncTask2, asyncTask3]
handleAsyncTasks(asyncTasks, 2).then((res) => console.log(res));
// function handleAsyncTasks(asyncTasks, n) {
//     return new Promise((resolve => {
//         let successResult = [];
//         let failedResult = [];
//         let settled = 0;
//         const cb = (res, status) => {
//             if (status === 'success') {
//                 successResult.push(res);
//             } else {
//                 failedResult.push(res);
//             }
//             if (++settled === asyncTasks.length) {
//                 resolve({ successResult, failedResult });
//                 return;
//             }
//             const next = asyncTasks.shift();
//             if (next) {
//                 next().then((res) => cb(res, 'success'), (res) => cb(res, 'failed'));
//             }
//         };

//         let i = 0;
//         while (i++ < n) {
//             const task = asyncTasks.shift();
//             if (!task) break;
//             task().then((res) => cb(res, 'success'), () => cb(res, 'failed'));
//         };
//     }))
// }

// async function handleAsyncTasks(tasks, n) {
//     let index = 0;
//     const result = [];
//     async function run(i) {
//         console.log('%c [ i ]-103', 'font-size:14px; background:#000; color:#fff;', i)

//         return new Promise(async (r) => {
//             if (i >= tasks.length) {
//                 // 队列没有任务了 递归出口
//                 r();
//             } else {
//                 result[i] = await tasks[i]();
//                 r(run(index++));
//             }
//         });
//     }
//     await Promise.all(new Array(n).fill(null).map(() => run(index++)));
//     return result;
// }

function handleAsyncTasks(tasks, n) {
    const results = [];
    let index = 0;
    const run = (idx) => {
        return new Promise((resolve) => {
            if (idx >= tasks.length) {
                resolve();
            } else {
                tasks[idx]().then((value) => {
                    results[idx] = value;
                    resolve(run(index++));
                })
            }
        })
    }

    return Promise.all(new Array(n).fill(null).map(() => run(index++))).then(() => results);
}
