## 垂直水平居中

- 绝对定位 + margin 反向偏移（子元素宽高已知）
- 绝对定位 + transform 反向偏移
- 终极大法：flex 布局

## flex 布局（弹性布局）

- 采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。
- 容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。

### 容器属性

- flex-direction： 决定主轴的方向(即项目的排列方向)

  row（默认值）：主轴为水平方向，起点在左端
  row-reverse：主轴为水平方向，起点在右端
  column：主轴为垂直方向，起点在上沿。
  column-reverse：主轴为垂直方向，起点在下沿

- flex-wrap： 决定容器内项目是否可换行

  nowrap（默认值）：不换行
  wrap：换行，第一行在下方
  wrap-reverse：换行，第一行在上方

- flex-flow 是 flex-direction 属性和 flex-wrap 属性的简写形式

  默认值为 row nowrap

- justify-content：定义了项目在主轴上的对齐方式

  flex-start（默认值）：左对齐
  flex-end：右对齐
  center：居中
  space-between：两端对齐，项目之间的间隔都相等
  space-around：两个项目两侧间隔相等

- align-items：定义项目在交叉轴上如何对齐

  flex-start：交叉轴的起点对齐
  flex-end：交叉轴的终点对齐
  center：交叉轴的中点对齐
  baseline: 项目的第一行文字的基线对齐
  stretch（默认值）：如果项目未设置高度或设为 auto，将占满整个容器的高度

- align-content：定义了多根轴线的对齐方式

  如果项目只有一根轴线，该属性不起作用
  flex-start：与交叉轴的起点对齐
  flex-end：与交叉轴的终点对齐
  center：与交叉轴的中点对齐
  space-between：与交叉轴两端对齐，轴线之间的间隔平均分布
  space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍
  stretch（默认值）：轴线占满整个交叉轴

### 元素属性

- order：定义项目的排列顺序。数值越小，排列越靠前，默认为 0
- flex-grow：定义项目的放大比例（容器宽度>元素总宽度时如何伸展）。默认为 0，即如果存在剩余空间，也不放大
- flex-shrink：flex-shrink
  定义了项目的缩小比例（容器宽度<元素总宽度时如何收缩），默认为 1，即如果空间不足，该项目将缩小
- flex-basis：设置的是元素在主轴上的初始尺寸
- flex：flex 属性是 flex-grow, flex-shrink 和 flex-basis 的简写，默认值为 0 1 auto
- align-self：允许单个项目有与其他项目不一样的对齐方式，可覆盖 align-items 属性
