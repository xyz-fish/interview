### svg和canvas的区别

svg和canvas的作用图像绘制

不同点
1. svg是基于矢量图形，canvas是像素位图
 - svg不会随着放大缩小而出现失真的情况，而canvas依赖于分辨率
2. 绘制图形的方式不同
	- svg是基于xml的，配合svg的各种元素并通过设置元素属性，样式来绘制图形
	- canvas是在HTML中定义一块画布，获取到这个元素的context后， 通过js编程来绘制图形
3. 结构上来看
	- svg的各种标签会存在HTML结构中，如果频繁修改svg的元素，不利于渲染性能
	- canvas 只是这个canvas存在html结构中，canvas context内部的绘制不会影响到html结构
	- 所以canvas没法对内部图形进行dom事件绑定, svg则可以
	- 由于svg绘制事由各种标签组合而成的，所以他文本内容和属性可以直接修改，并且有利于seo
4. 使用场景
	- svg最适合用于图形的展示，监听一些事件绑定绑定的处理显示: 比如我们常用的字体图标，一些库像 jVetorMap、JointJs这些库
	- canvas是和大量动态显示或者实时的数据图形，和动画，游戏等 比如数据图标类的echarts、一些游戏引擎egret cocos2d