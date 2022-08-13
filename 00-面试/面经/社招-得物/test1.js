/********************第 1 题**********************/
// 实现⼀个 arrange 函数，可以进⾏时间和⼯作调度
// [ > … ] 表⽰调⽤函数后的打印内容
// arrange('William').execute();
// > William is notified
// arrange('William').do('commit').execute();
// > William is notified
// > Start to commit
// arrange('William').wait(5).do('commit').execute();
// > William is notified
// 等待 5 秒
// > Start to commit
// arrange('William').waitFirst(5).do('push').execute();
// 等待 5 秒
// > William is notified
// > Start to push

function arrange(name) {
    // 模仿函数调用顺序
    var actionList = [];
    // 记录那个函数是promise，下方处理时需要等待执行
    var actionTypeList = [];
    const sleep = (time) => new Promise((resove) => {
        setTimeout(resove, time);
    });

    actionList.push(() => console.log(`${name} is undefend`));
    actionTypeList.push('n');

    arrange.do = (action) => {
        actionList.push(() => console.log(`Start is ${action}`));
        actionTypeList.push('n');
        return arrange;
    };

    arrange.wait = (time) => {
        actionList.push(() => sleep(time));
        actionTypeList.push('p');
        return arrange;
    };

    arrange.waitFirst = (time) => {
        actionList.unshift(() => sleep(time));
        actionTypeList.unshift('p');
        return arrange;
    };

    arrange.execute = async () => {
        for (let i = 0; i < actionList.length; i++) {
            if (actionTypeList[i] === 'p') {
                await actionList[i]();
            } else {
                actionList[i]();
            };
        };
    };

    return arrange;
};