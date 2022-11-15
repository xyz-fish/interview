function MyCall() {
  const [fn, context, ...args] = arguments

  context.fn = fn

  const res = context.fn(...args)

  return res
}

var name = 'global_name'

var obj1 = {
  name: 'name1',
  foo: function (p1, p2) {
    console.log(this.name)
    console.log(p1, p2)
  }
}

obj1.foo()

var obj2 = {
  name: 'name2'
}

MyCall(obj1.foo, obj2, 'param1', 'param1')

console.log(globalThis)
