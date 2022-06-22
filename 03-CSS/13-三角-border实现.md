- 使用 border 实现
- 边框实际上并不是一个直线，如果我们将四条边设置不同的颜色，将边框逐渐放大，可以得到每条边框都是一个梯形

```css
.box {
  width: 0px;
  height: 0px;
  border-top: #4285f4 solid;
  border-right: transparent solid;
  border-width: 85px;
  margin: 50px;
}
```

## border 和 outline 区别

1. border 占用空间，outline 不占用空间，不会影响元素的尺寸和位置。

2. border 可应用于几乎所有有形的 html 元素，而 outline 是针对链接、表单控件和 ImageMap 等元素设计。

3. outline 的效果将随元素的 focus 而自动出现，相应的由 blur 而自动消失。这些都是浏览器的默认行为，无需 JavaScript 配合 CSS 来控制。
