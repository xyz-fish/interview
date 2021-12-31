### new 一个构造函数，如果函数返回 return {} 、 return null ， return 1 ， return true 会发生什么情况？

- 当return的是基本类型的时候，（undefined, null, string, number, boolean ,Symbol）的时候没有影响还是会返回新的空对象

- 当return的是 引用类型的时候 ，则会返回 return 的 对象，不再是新的对象

---- ---------------
瞎猜一波：
因为js引用类型都是通过构造函数创建的