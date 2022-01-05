### window.name

`window.name` 是浏览器窗口window对象的一个可读可写的属性，默认是一个空字符串，赋值可以是string 其他类型(有toString()方法)会被转成string，打开新的窗口又是一个新的window.name

可以通过`window.name` 进行一个窗口和iframe跨域跨文档传输的操作 不过现在H5已经有了`window.postMessage`