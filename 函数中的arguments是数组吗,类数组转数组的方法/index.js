function foo() {
  console.log(arguments)
  console.log(arguments.length)

  // fn1
  // console.log(Array.from(arguments))
  // fn2
  // console.log(Array.prototype.slice.call(arguments))

  // fn3
  // console.log([...arguments])

  // fn4
  // const arg = []
  // for (const i in arguments) {
  //   arg[i] = arguments[i]
  // }

  // console.log(arg)
}

foo(1, 2, 3, 4)
