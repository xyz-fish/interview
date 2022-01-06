### window.window会输出什么

1. window.window 指向window的本身， window.window.window... 都是指向window

- js 全局 var foo = 1 window.foo === foo
- js 中 浏览器是最外层全局作用域, 会有像`document` `open` 等全局属性和方法 为了方便我们在局部作用域中使用这些属性方法，会有`var window = this`
这里window 也是全局作用域的一个属性 从而 window.window 指向它本身， window代表这全局作用域这个对象，但我们局部作用于想使用全局执行环境时候，可以传入window来修改执行环境


-------------------
盲猜一波 浏览器运行时js引擎，执行我们的代码 形成一个全局作用域的对象， 为了方便和局部作用域等操作 他通过`var window = this` 帮我们定义了window这个对象，而我们自己代码中构造函数的实力对象也就相当于这个函数的作用域对象


[参考链接](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/window)