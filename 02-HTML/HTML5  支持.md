### 低版本浏览器不支持 HTML5 标签怎么解决？

 <div style="color: #F00">
    使用JavaScript 语句 document.createElement("header") 即可让低版本 IE 浏览器支持新的元素。
 </div>
 
更简单的方法是使用HTML5 shiv （条件注释）来解决: 
+ 在 IE 浏览器的版本小于 IE9 时将读取 html5.js 文件，并解析它
+ 必须引入在html头部 在页面结构化之前 提前解析
```html
<!--[if lt IE 9]>
  <script src="http://cdn.static.runoob.com/libs/html5shiv/3.7/html5shiv.min.js"></script>
<![endif]-->

<!--[if lt IE 9]>
    <script src="http://css3-mediaqueries-js.googlecode.com/files/css3-mediaqueries.js"></script>
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->

```

```
