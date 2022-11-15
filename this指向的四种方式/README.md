a.如果是一般函数,this指向全局对象window;

b.在严格模式下"use strict",为undefined.

c.对象的方法里调用,this指向调用该方法的对象.

d.构造函数里的this,指向创建出来的实例.