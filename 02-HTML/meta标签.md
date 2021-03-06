## HTML `<meta>` 元素

- meta 标签描述了一些基本的元数据。如：网页的描述，关键词，文件的最后修改时间，作者
- meta 标签提供了元数据，元数据也不显示在页面上，但会被浏览器解析。
- 常见属性值及含义：

### charset 属性

```html
<!-- 定义网页文档的字符集 -->
<meta charset="utf-8" />
```

### name + content 属性

```html
<!-- 网页作者 -->
<meta name="author" content="开源技术团队" />
<!-- 网页地址 -->
<meta
  name="website"
  content="https://sanyuan0704.github.io/frontend_daily_question/"
/>
<!-- 网页版权信息 -->
<meta name="copyright" content="2018-2019 demo.com" />
<!-- 网页关键字, 用于SEO -->
<meta name="keywords" content="meta,html" />
<!-- 网页描述 -->
<meta name="description" content="网页描述" />
<!-- 搜索引擎索引方式，一般为all，不用深究 -->
<meta name="robots" content="all" />
<!-- 移动端常用视口设置 -->
<meta
  name="viewport"
  content="width=device-width,initial-scale=1.0,maximum-scale=1.0, user-scalable=no"
/>
<!-- 
  viewport参数详解：
  width：宽度（数值 / device-width）（默认为980 像素）
  height：高度（数值 / device-height）
  initial-scale：初始的缩放比例 （范围从>0 到10）
  minimum-scale：允许用户缩放到的最小比例
  maximum-scale：允许用户缩放到的最大比例
  user-scalable：用户是否可以手动缩 (no,yes)
 -->
<!--忽略将数字变为电话号码-->
<meta content="telephone=no" name="format-detection" />
<!--IOS中Safari允许全屏浏览-->
<meta content="yes" name="apple-mobile-web-app-capable" />
<!--忽略识别邮箱-->
<meta name="format-detection" content="email=no" />
```

### http-equiv 属性

```html
<!-- expires指定网页的过期时间。一旦网页过期，必须从服务器上下载。 -->
<meta http-equiv="expires" content="Fri, 12 Jan 2020 18:18:18 GMT" />
<!-- 等待一定的时间刷新或跳转到其他url。下面1表示1秒 -->
<meta http-equiv="refresh" content="1; url=https://www.baidu.com" />
<!-- 禁止浏览器从本地缓存中读取网页，即浏览器一旦离开网页在无法连接网络的情况下就无法访问到页面。 -->
<meta http-equiv="pragma" content="no-cache" />
<!-- 也是设置cookie的一种方式，并且可以指定过期时间 -->
<meta
  http-equiv="set-cookie"
  content="name=value expires=Fri, 12 Jan 2001 18:18:18 GMT,path=/"
/>
<!-- 使用浏览器版本 -->
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<!-- 针对WebApp全屏模式，隐藏状态栏/设置状态栏颜色，content的值为default | black | black-translucent -->
<meta
  name="apple-mobile-web-app-status-bar-style"
  content="black-translucent"
/>
```
