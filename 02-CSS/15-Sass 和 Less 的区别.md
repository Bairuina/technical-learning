## Sass 和 Less 的区别

- 变量符不一样，less 是@，而 Scss 是$，而且变量的作用域也不一样
- 输出设置，Less 没有输出设置，Sass 提供 4 中输出选项：nested, compact, compressed 和 expanded。
- Sass 支持条件语句，可以使用 if{}else{},for{}循环等等。而 Less 不支持。
- Less 是基于 JavaScript，是在客户端处理的。Sass 是基于 Ruby 的，是在服务器端处理的。
- 而 Less 是需要引入 less.js 来处理 Less 代码输出 css 到浏览器，
- 也可以在开发环节使用 Less，然后编译成 Css 文件，直接放到项目中，
- 也有`Less.app`、`SimpleLess`、`CodeKit.app`这样的工具，也有在线编译地址。
