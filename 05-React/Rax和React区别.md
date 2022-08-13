## Rax 和 Reaxt

- React 是一种标准，Rax 是对该标准的一个实现。
- Rax 偏向于解决多端问题，React偏向于解决前端历史的性能问题

## Rax 特点

- 设计上支持不同容器
  Rax 在设计上抽象出 Driver 的概念，用来支持在不同容器中渲染
- 体积小
  Rax 压缩 + gzip 后的体积是 8.0kb, 相比 React 的 43.7kb, 对于无线端友好了很多。
- 支持返回多个同级节点
  React 需要用一个父容器包裹下，Rax 不需要
- 标准化
  遵循 W3C 标准

## 与 React 区别

- 没有 createClass() 方法
- Rax setState() 是同步的, React setState 是异步的
- findDOMNode() 方法可以接收字符串类型的 id
- PropTypes 只是 React 的接口兼容
- 支持返回多个同层级节点
