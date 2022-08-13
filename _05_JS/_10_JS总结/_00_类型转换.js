
setTimeout(() => { console.log(1) }, 0);
new Promise(resolve => {
    console.log(2);
    resolve;
    Promise.resolve().then(() => {
        console.log(3);
    }).then(() => {
        console.log(4);
    }).then(() => {
        console.log(5);
    })
})
console.log(6);

// 2 6 3 4 5 1 