## CSS3 中的盒模型有以下两种：标准盒子模型、IE 盒子模型

- 盒模型都是由四个部分组成的，分别是 margin、border、padding 和 content。
- 标准盒模型和 IE 盒模型的区别在于设置 width 和 height 时，所对应的范围不同：

  - 标准盒模型的 width 和 height 属性的范围只包含了 content，
  - IE 盒模型的 width 和 height 属性的范围包含了 border、padding 和 content。

- 可以通过修改元素的 box-sizing 属性来改变元素的盒模型：

  - box-sizeing: content-box 表示标准盒模型（默认值）
  - box-sizeing: border-box 表示 IE 盒模型（怪异盒模型）

## margin 重叠

- 两个正数的外边距取最大的边距作为外边距。
- 如果一个为正数，一个为负数，最终的外边距为两者之和。
- 如果两个值都是负数的话，最终的外边距取绝对值最大的值。

## BFC 块级格式化上下文

BFC 就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此

### BFC 布局规则是？

- 内部的 Box 会在垂直方向，一个接一个地放置。
- Box 垂直方向的距离由 margin 决定。属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠
- BFC 的区域不会与 float box 重叠。
- 计算 BFC 的高度时，浮动元素也参与计算

### 哪些元素会生成 BFC?

- float 不为 none
- position 不为 static/relative
- display 的值为 inline-block、table-cell、table-caption
- overflow 的值不为 visible
- 根元素

### BFC 的使用场景有哪些？

- 自适应两栏布局
- 防止垂直 margin 重叠
- 清楚内部浮动
