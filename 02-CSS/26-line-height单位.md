## line-height 设置为数值和百分比值的区别

- 数值：
  根据父元素的 font-size 值计算 line-height 的值，子元素继承 line-height 的数值，根据自身的 font-size 再次计算 line-height 的值。
- 百分比值：
  根据父元素的 font-size 值计算 line-height 的值，子元素继承计算后的 line-height 值。

- 继承 line-height 的时候，带单位的先计算再继承，不带单位的直接继承。
- line-height: 150%和 line-height:1.5em 相同，都是先计算然后把固定的行高继承给子元素
