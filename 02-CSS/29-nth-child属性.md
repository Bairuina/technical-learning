## _01_如何实现表格单双行条纹样式

+ `nth-child(2n)/nth-child(even)`: 双行样式
+ `nth-child(2n+1)/nth-child(odd)`: 单行样式

```css
tr:nth-child(2n) {
  background-color: red;
}
tr:nth-child(2n+1) {
  background-color: blue;
}
```

+ 如何匹配最前三个子元素: :nth-child(-n+3)
+ 如何匹配最后三个子元素: :nth-last-child(-n+3)
