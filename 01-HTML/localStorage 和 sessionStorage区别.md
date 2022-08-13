## localStorage 和 sessionStorage

### 两者的共同点在于：

    1、仅在客户端中保存，不参与和服务器的通信
    2、存储大小均为5M左右
    3、都有同源策略限制

### 两者的不同点在于：

    1、生命周期 —— 数据可以存储多少时间

        localStorage: 存储的数据是永久性的，除非用户人为删除否则会一直存在。
        sessionStorage: 与存储数据的脚本所在的标签页的有效期是相同的。一旦窗口或者标签页被关闭，那么所有通过 sessionStorage 存储的数据也会被删除。

    2、作用域 —— 谁拥有数据的访问权

        localStorage: 在同一个浏览器内，同源文档（协议、域名、端口）之间共享 localStorage 数据，可以互相读取、覆盖。
        sessionStorage: 与 localStorage 一样需要同一浏览器同源文档这一条件。不仅如此，sessionStorage 的作用域还被限定在了窗口中，也就是说，只有同一浏览器、同一窗口的同源文档才能共享数据。

### 常用的 api

保存数据：localStorage.setItem(key,value);
读取数据：localStorage.getItem(key);
删除单个数据：localStorage.removeItem(key);
删除所有数据：localStorage.clear();
得到某个索引的 key：localStorage.key(index);
