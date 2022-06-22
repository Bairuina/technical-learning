https://vue3js.cn/interview/css/css_performance.html#%E4%B8%80%E3%80%81%E5%89%8D%E8%A8%80

# 优化方案

## 内联首屏关键 CSS

在打开一个页面，页面首要内容出现在屏幕的时间影响着用户的体验，而通过内联 css 关键代码能够使浏览器在下载完 html 后就能立刻渲染

而如果外部引用 css 代码，在解析 html 结构过程中遇到外部 css 文件，才会开始下载 css 代码，再渲染

所以，CSS 内联使用使渲染时间提前

注意：但是较大的 css 代码并不合适内联（初始拥塞窗口、没有缓存），而其余代码则采取外部引用方式

## 异步加载 CSS

1. 使用 javascript 将 link 标签插到 head 标签最后

```JavaScript
// 创建 link 标签
const myCSS = document.createElement( "link" );
myCSS.rel = "stylesheet";
myCSS.href = "mystyles.css";
// 插入到 header 的最后位置
document.head.insertBefore( myCSS, document.head.childNodes[ document.head.childNodes.length - 1 ].nextSibling );
```

2. 设置 link 标签 media 属性为 noexis，浏览器会认为当前样式表不适用当前类型，会在不阻塞页面渲染的情况下再进行下载。加载完成后，将 media 的值设为 screen 或 all，从而让浏览器开始解析 CSS

```html
<link
  rel="stylesheet"
  href="mystyles.css"
  media="noexist"
  onload="this.media='all'"
/>
```

3. 通过 rel 属性将 link 元素标记为 alternate 可选样式表，也能实现浏览器异步加载。同样别忘了加载完成之后，将 rel 设回 stylesheet

```html
<link
  rel="alternate stylesheet"
  href="mystyles.css"
  onload="this.rel='stylesheet'"
/>
```

## 资源压缩

利用 webpack、gulp/grunt、rollup 等模块化工具，将 css 代码进行压缩，使文件变小，大大降低了浏览器的加载时间

### 合理使用选择器

1. 不要嵌套使用过多复杂选择器，最好不要三层以上
2. 使用 id 选择器就没必要再进行嵌套
3. 通配符和属性选择器效率最低，避免使用

### 减少使用昂贵的属性

在页面发生重绘的时候，昂贵属性如 box-shadow/border-radius/filter/透明度/:nth-child 等，会降低浏览器的渲染性能

### 不要使用@import

css 样式文件有两种引入方式，一种是 link 元素，另一种是@import

**@import 会影响浏览器的并行下载，使得页面在加载时增加额外的延迟，增添了额外的往返耗时**

而且多个@import 可能会导致下载顺序紊乱

比如一个 css 文件 index.css 包含了以下内容：@import url("reset.css")

那么浏览器就必须先把 index.css 下载、解析和执行后，才下载、解析和执行第二个文件 reset.css

### 其他

1. 减少重排操作，以及减少不必要的重绘
2. 了解哪些属性可以继承而来，避免对这些属性重复编写
3. cssSprite，合成所有 icon 图片，用宽高加上 backgroud-position 的背景图方式显现出我们要的 icon 图，减少了 http 请求
4. 把小的 icon 图片转成 base64 编码
5. CSS3 动画或者过渡尽量使用 transform 和 opacity 来实现动画，不要使用 left 和 top 属性

# 雪碧图

## 雪碧图优点：

- 通过将多张图片合并成一张，可以有效减少 HTTP 请求，提高页面加载的性能
- 将多张图片合并到一张图片中，可以减小图片的总大小
- 整理起来更为方便，同一个按钮不同状态的图片也不需要一个个切割出来并个别命名
- 只需要修改一张或少张图片的颜色或样式来改变整个网页的风格
- 只需对一张集合的图片命名，不需要对每一个小图片进行命名，从而提高了网页制作效率

## 雪碧图缺点

- 合成起来麻烦
- 适应性差
- 可维护性差
- 背景大小，容易出现断裂，相比之下不是直接替换照片，而是利用 PS 来测量好每一个的位置，环节繁琐一些，当然更改部分元素的同时需要动整体，也比较麻烦一些
- 小图标在高清屏幕上可能会失真
- 另外频繁使用定位会占用比较多的 CPU
