function parallel(tasks, concurrency) {
    const newTasks = [...tasks];
    return new Promise(resolve => {
        let resolved = 0;
        let rejected = 0;
        let settled = 0;
        const cb = fulfilled => {
            if (fulfilled) ++resolved;
            else ++rejected;
            if (++settled === tasks.length) resolve({ resolved, rejected });
            const next = newTasks.shift();
            if (next) next().then(() => cb(true), () => cb(false));
        };
        let i = 0;
        while (i++ < concurrency) {
            const task = newTasks.shift();
            if (!task) break;
            task().then(() => cb(true), () => cb(false));
        }
    });
}
https://blog.csdn.net/weixin_44730897/article/details/115625651

function handleAsyncTasks(asyncTasks, n) {
    return new Promise((resolve => {
        let successResult = [];
        let failedResult = [];
        let settled = 0;
        const cb = (res, status) => {
            if (status === 'success') {
                successResult.push(res);
            } else {
                failedResult.push(res);
            }
            if (++settled === asyncTasks.length) {
                resolve({ successResult, failedResult });
                return;
            }
            const next = asyncTasks.shift();
            if (next) {
                next().then((res) => cb(res, 'success'), (res) => cb(res, 'failed'));
            }
        };

        let i = 0;
        while (i++ < n) {
            const task = asyncTasks.shift();
            if (!task) break;
            task().then((res) => cb(res, 'success'), () => cb(res, 'failed'));
        };
    }))
}