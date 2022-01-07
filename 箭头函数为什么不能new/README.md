### 箭头函数为什么不能new

首先`new`运算符 是 创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例

然后 箭头函数 没有内部[[constructor]] 这个构造器方法，所以不能new

----------------------------------------------------------------
1. js对象 都是构造函数生成的 `new Object()` `new Function()` 也包含`new Number()`那三个特殊的
2. 箭头函数应该只是是es6新的语法糖， 在我们书写箭头函数时候 也不能出现`()` `=>`换行的情况，他就像一个表达式返回了一个特殊的函数， 所以他没有`prototype` 不像普通函数那样含有构造器
3. 在预解析的阶段 ，他们的处理方式也是不一样的，普通函数就像我们所说的有自己的作用域 执行时完善的作用域链，而箭头函数作用域的对象是指向他所处的一个作用域的对象，执行时的作用域链也就指向了所处的作用域 这也导致了`this` 指向的问题 和 `arguments`的问题， 以及在使用call apply的一些问题
4. 在箭头函数执行的时候 如果 new.target 也会报错

[参考链接1](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
[参考2](https://262.ecma-international.org/6.0/#sec-built-in-function-objects-construct-argumentslist-newtarget)