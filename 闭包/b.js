function foo(v) {
  let a = 1

  function f() {
    var c = 1
    console.log(a)
  }

  f()
}

foo()
