/*********************第 4 题**********************
实现⼀个函数，从第⼀个参数，整数数组中，找到所有的组合, 并按照数组的⻓度有⼩到⼤的顺
序使得每个数组相加的值都等于第⼆个参数的值
输⼊[1,2,3,4,5], 6 -> 输出 [[1,5], [2,4]，[1,2,3]]
输⼊[1,3], 6 -> 输出 []
*/
function getAllArrays(array, value) {
    let result = [];
    const backtrack = (index, path, sum) => {
        if (sum > value) return;
        if (sum == value) return result.push(path.slice());
        for (let i = index; i < array.length; i++) {
            if (i - 1 >= index && array[i - 1] == array[i]) continue;
            path.push(array[i]);
            sum += array[i];
            backtrack(i + 1, path, sum);
            sum -= array[i];
            path.pop();
        }
    };
    array.sort((a, b) => a - b);
    backtrack(0, [], 0);
    return result.sort((a, b) => a.length - b.length);
};