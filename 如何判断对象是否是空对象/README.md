### 如何判断对象是不是空对象

1. `JSON.stringify({}) === '{}'`
2. `for(const i in obj)` 循环，如果是空对象 则不会进入循环
3. `Object.keys()` 等类似的循环
4. `Object.getOwnPropertyName()`

----------------------------------------------------------------
方法多---- `Object.values()` `Object.entries()`

> 各种方法在遇到特殊情况下都不特别严格，都以各自的问题 正常我们就是类似json的空对象