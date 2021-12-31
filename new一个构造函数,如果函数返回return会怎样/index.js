function InnerFn() {
  return {}
}

function Fn() {
  return InnerFn
}

const fn = new new Fn()()

console.log(fn)

function FnNumber() {
  return 1
}

console.log(typeof new FnNumber())
