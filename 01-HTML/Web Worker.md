## Web Workers

**H5 规范提供了 js 分线程的实现, 取名为: Web Workers**

1. 在 HTML 页面中，如果在执行脚本时，页面的状态是不可相应的，直到脚本执行完成后，页面才变成可相应。
2. web worker 是运行在后台的 js，独立于其他脚本，不会影响页面的性能。

## 实现原理

1. 检测浏览器对于 web worker 的支持性
2. 创建 web worker 文件（js，回传函数等）
3. 使用 Worker 构造函数,创建 Web Worker 对象，加载分线程执行的 js 文件
4. Worker.prototype.onmessage: 用于接收另一个线程的回调函数
5. Worker.prototype.postMessage: 向另一个线程发送消息

## 不足

1. worker 内代码不能操作 DOM(更新 UI)
2. 不能跨域加载 JS
3. 不是每个浏览器都支持这个新特性
