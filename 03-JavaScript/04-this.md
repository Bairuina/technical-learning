## this 是什么？

- this 指的是函数运行时所在的环境
- this 在函数执行时确认，this 一旦被确定了，就不可以再更改。

## this 的绑定规则

默认绑定、隐式绑定、显示绑定、new 绑定
优先级：默认绑定 < 隐式绑定 < 显式绑定 < new 绑定

- 默认绑定
  严格模式下，不能将全局对象用于默认绑定，this 会绑定到 undefined，只有函数运行在非严格模式下，默认绑定才能绑定到全局对象
- 隐式绑定
  函数还可以作为某个对象的方法调用，这时 this 就指这个上级对象
  this 永远指向的是最后调用它的对象
- 显示绑定
  三种显式绑定方法：
  fun.apply(thisArg, [argsArray])
  func.call(thisArg, arg1, arg2, …)
  func.bind(thisArg[, arg1[, arg2[, …]]])
- new 绑定
  通过 new 操作符调用构造函数时发生的 this 绑定。

## call、apply、bind

- 区别
  call 接收多个参数，第一个为函数上下文也就是 this，后边参数为函数本身的参数。
  apply 接收两个参数，第一个参数为函数上下文 this，第二个参数为函数参数只不过是通过一个数组的形式传入的。
  bind 接收多个参数，第一个是 bind 返回值,返回值是一个函数上下文的 this，改变 this 指向后不会立即执行，而是返回一个永久改变 this 指向的函数。
- 代码实现
  https://juejin.cn/post/6844903773979033614
  bind:

```JavaScript
Function.prototype.myBind = function (context) {
    // 判断调用对象是否为函数
    if (typeof this !== "function") {
        throw new TypeError("Error");
    }
    // 返回一个绑定this的函数，我们需要在此保存this
    let self = this
    // 可以支持柯里化传参，保存参数
    let arg = [...arguments].slice(1)

    return function Fn() {
        // 根据调用方式，返回函数绑定this，传入两次保存的参数
        return self.apply(this instanceof Fn ? new self(...arguments) : context, arg.concat(...arguments))
    }

}
```

## ES6 的箭头函数和普通函数区别

1. 在 ES6 的语法中还提供了箭头函语法，让我们在代码书写时就能确定 this 的指向
2. 箭头函数中没有 arguments (类数组)，只能基于...arg 获取传递的参数集合(数组)
3. 箭头函数不能被 new 执行(因为:箭头函数没有 this 也没有 prototype)
4. 箭头函数语法上比普通函数更加简洁(ES6 中每一种函数都可以使用形参赋默认值和剩余运算符)
