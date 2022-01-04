function Foo() {
  this.name = 'foo'

  this.fn = function () {
    console.log(this.name)
  }
}

Foo.prototype.fn = function () {
  console.log(this.name)
}

const obj = {
  name: 'obj'
}

const foo = new (Foo.bind(obj))()

console.log(foo)

foo.fn.bind(obj)()
