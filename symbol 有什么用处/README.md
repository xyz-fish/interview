### symbol 有什么用处？

`Symbol` 是es6 新增的一种基本类型

用处： 
1. Symbol() 返回的是一个惟一的值，可以作为对象的标识符,保证该对象的key值的唯一性，防止一些属性攥改的问题
	Symbol() 提供了 全局的Symbol.for() 和Symbol.keyFor() 从全局的symbol注册表里设置和获取symbol, 可以全局共享Symbol
	- for() 设置一个注册全局的symbol表，for(description) 假设description已被注册则会返回该symbol值
	- forKey() 可以通过传入symbol值 获取symbol的描述
	这样我们可以在不同的模块通过for() 来设置symbol值 其他或者全局获取到该symbol值
2. 因为不会被正常的迭代获取到，所以可以作为颞部的私有属性和方法

注意点：
没法通过迭代器获取到已symbol值为key的属性。可以通过`Object.getOwnPropertySymbols()`获取
`JSON.stringify()` 没法解析出已symbol为key的值

[参考链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol)