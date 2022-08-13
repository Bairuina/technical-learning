## 能不能说一说 XSS 攻击？

**XSS 攻击**是指浏览器中执行恶意脚本, 然后拿到用户的信息进行操作。

1. 窃取 Cookie。
2. 监听用户行为，比如输入账号密码后直接发送到黑客服务器。
3. 修改 DOM 伪造登录表单。
4. 在页面中生成浮窗广告

主要分为存储型、反射型和文档型。

- 存储型，顾名思义就是将恶意脚本存储了起来，确实，存储型的 XSS 将脚本存储到了服务端的数据库，然后在客户端执行这些脚本，从而达到攻击的效果。
- 反射型 XSS 指的是恶意脚本作为网络请求的一部分
- 文档型的 XSS 攻击并不会经过服务端，而是作为中间人的角色，在数据传输过程劫持到网络数据包，然后修改里面的 html 文档
  - 这样的劫持方式包括 WIFI 路由器劫持或者本地恶意软件

防范的措施包括:

- 一个信念: 不要相信用户的输入，对输入内容转码或者过滤，让其不可执行。
  - 对用户的输入进行转码或者过滤
- 两个利用: 利用 CSP，利用 Cookie 的 HttpOnly 属性。
  - 设置 Cookie 的 HttpOnly 属性后，JavaScript 便无法读取 Cookie 的值

## 能不能说一说 CSRF 攻击？

CSRF(Cross-site request forgery), 即跨站请求伪造，指的是黑客诱导用户点击链接，打开黑客的网站，然后黑客利用用户目前的登录状态发起跨站请求。

CSRF 攻击一般会有三种方式:

- 自动 GET 请求
- 自动 POST 请求
- 诱导点击发送 GET 请求。

防范措施:

- 利用 Cookie 的 SameSite 属性

  - Cookie 的 SameSite 属性用来限制第三方 Cookie，从而减少安全风险，可以用来防止 CSRF 攻击和用户追踪
  - CSRF 攻击中重要的一环就是自动发送目标站点下的 Cookie
  - SameSite 可以设置为三个值，Strict、Lax 和 None。
    - Strict 最为严格，完全禁止第三方 Cookie，跨站点时，任何情况下都不会发送 Cookie
    - 换言之，只有当前网页的 URL 与请求目标一致，才会带上 Cookie
    - Lax 规则稍稍放宽，大多数情况也是不发送第三方 Cookie，但是导航到目标网址的 Get 请求除外。

- 验证来源站点

  - 在 HTTP 协议中，每一个异步请求都会携带两个 Header ，用于标记来源域名
  - Origin 只包含域名信息，而 Referer 包含了具体的 URL 路径
  - 这两个 Header 在浏览器发起请求时，大多数情况会自动带上，并且不能由前端自定义内容。
  - 服务器可以通过解析这两个 Header 中的域名，确定请求的来源域。
  - 通过校验请求的该字段，我们能知道请求是否是从本站发出的。我们可以通过拒绝非本站发出的请求，来避免了 CSRF 攻击。

- CSRF Token
  - 首先，浏览器向服务器发送请求时，服务器生成一个字符串，将其植入到返回的页面中。
  - 然后, 浏览器如果要发送请求，就必须带上这个字符串，然后服务器来验证是否合法，如果不合法则不予响应
  - 服务器将 Token 返回到前端 前端发请求时携带这个 Token 服务器验证 Token 是否正确

https://segmentfault.com/a/1190000021114673

通常情况下，CSRF 攻击是攻击者借助受害者的 Cookie 骗取服务器的信任，在受害者毫不知情的情况下以受害者名义伪造请求发送给受攻击服务器，从而在并未授权的情况下执行在权限保护之下的操作。可以这么理解 CSRF 攻击：攻击者盗用了你的身份，以你的名义发送恶意请求
受害者必须依次完成两个步骤：

1. 登录受信任网站 A，并在本地生成 Cookie。
2. 在不登出 A 的情况下，访问危险网站 B。

CSRF 特点

- 攻击一般发起在第三方网站，而不是被攻击的网站。
- 攻击是利用受害者在被攻击网站的登录凭证，冒充受害者提交操作，仅仅是“冒用”，而不是直接窃取数据。
- 攻击者预测出被攻击的网站接口的所有参数，成功伪造请求。