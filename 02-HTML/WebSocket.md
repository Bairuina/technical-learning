WebSocket 出现前

- 以前的推送技术使用 Ajax 轮询，浏览器需要不断地向服务器发送 http 请求来获取最新的数据，浪费很多的带宽等资源。
- 使用 webSocket 通讯，客户端和服务端只需要一次握手建立连接，就可以互相发送消息，进行数据传输，更实时地进行通讯。

## 推送技术

<img src='/静态资源/img/推送技术.png'>

### 传统轮询(Traditional Polling)

当前 Web 应用中较常见的一种持续通信方式，通常采取 setInterval 或者 setTimeout 实现。

- setInterval：在网络情况不稳定的情况下，服务器从接收请求、发送请求到客户端接收请求的总时间有可能超过 10 秒，而请求是以 10 秒间隔发送的，这样会导致接收的数据到达先后顺序与发送顺序不一致
- setTimeout： 程序首先设置 10 秒后发起请求，当数据返回后再隔 10 秒发起第二次请求，以此类推。这样的话虽然无法保证两次请求之间的时间间隔为固定值，但是可以保证到达数据的顺序。

### 长轮询(Long Polling)

- 长轮询的基本思想是在每次客户端发出请求后，服务器检查上次返回的数据与此次请求时的数据之间是否有更新，
- 如果有更新则返回新数据并结束此次连接，否则服务器 hold 住此次连接，直到有新数据时再返回相应。
- 而这种长时间的保持连接可以通过设置一个较大的 HTTP timeout` 实现。
- 有效地解决传统轮询带来的带宽浪费 服务器 hold 连接会消耗资源，返回数据顺序无保证，难于管理维护

### 服务器发送事件(Server-Sent Event)

Server-Sent 事件指的是网页自动获取来自服务器的更新。

## WebSocket 与 Socket 的区别

- WebSocket 拥有完整的应用层协议，包含一套标准的 API
- Socket 是一组接口，是应用层与 TCP/IP 协议通信的中间软件抽象层。
- Socket 是传输控制层协议，WebSocket 是应用层协议。

### HTTP 与 WebSocket 区别

- http 是短连接，请求之后会关闭连接。
- http 通信只能由客户端发起
- WebSocket 长连接，只需通过一次请求初始化连接，然后所有的请求和响应都是通过这个 TCP 连接进行通信。
- WebSocket 是真正的双向平等对话，属于服务器推送技术的一种。 服务器可以主动向客户端推送信息， 客户端也可以主动向服务器发送信息。

### 一次握手建立 WebSocket 连接

- 浏览器先向服务器发送个 url 以 ws://开头的 http 的 GET 请求，响应状态码 101 表示 Switching Protocols 切换协议
- 服务器根据请求头中 `Upgrade:websocket` 把客户端的请求切换到对应的协议，即 websocket 协议。
- 响应头消息中包含 `Upgrade:websocket`，表示它切换到的协议，即 websocket 协议。

WebSocket 协议是借用 HTTP 协议 的 101 switch protocol 来达到协议转换的，从 HTTP 协议切换成 WebSocket 通信协议。
