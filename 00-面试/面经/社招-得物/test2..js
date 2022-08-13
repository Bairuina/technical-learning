/********************第 2 题**********************/
// 实现⼀个函数，可以将数组转化为树状数据结构
// ⼊参格式参考：
const arr = [
    { id: 1, name: "i1" },
    { id: 2, name: "i2", parentId: 1 },
    { id: 4, name: "i4", parentId: 3 },
    { id: 3, name: "i3", parentId: 2 },
    { id: 8, name: "i8", parentId: 7 }
];
// 出参格式可⾃⾏设计
function buildTree(arr) {
    let result = []
    let map = {};
    for (let item of arr) {
        map[item.id] = item;
    }
    for (let item of arr) {
        let parent = map[item.parentId];
        if (parent) {
            (parent.children || (parent.children = [])).push(item);
        } else {
            result.push(item);
        }
    }
    return result;
}

console.log(buildTree(arr));