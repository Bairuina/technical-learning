## SVG 、Canvas、WebGl

### SVG

- SVG 可缩放矢量图形（Scalable Vector Graphics）是基于可扩展标记语言 XML 描述的 2D 图形的语言，
- SVG 基于 XML 就意味着 SVG DOM 中的每个元素都是可用的，可以为某个元素附加 Javascript 事件处理器。
- 在 SVG 中，每个被绘制的图形均被视为对象。如果 SVG 对象的属性发生变化，那么浏览器能够自动重现图形。
- 其特点如下：
  1. 不依赖分辨率
  2. 支持事件处理器
  3. 最适合带有大型渲染区域的应用程序（比如谷歌地图）
  4. 复杂度高会减慢渲染速度（任何过度使用 DOM 的应用都不快）
  5. 不适合游戏应用

### Canvas

- Canvas 是画布，通过 Javascript 来绘制 2D 图形
- 是逐像素进行渲染的。其位置发生改变，就会重新进行绘制。
- 其特点如下：
  1. 依赖分辨率
  2. 不支持事件处理器
  3. 弱的文本渲染能力
  4. 能够以 .png 或 .jpg 格式保存结果图像
  5. 最适合图像密集型的游戏，其中的许多对象会被频繁重绘

### WebGl

- WebGL 3D 位图，是基于 Canvas 的 3D 框架。
