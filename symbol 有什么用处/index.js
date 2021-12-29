require('./symbol')

console.log(Symbol.for('name'))

const sm = Symbol('t')
Symbol.iterator
const obj = {
  sm: 'sm'
}

obj.sm = 123

console.log(obj)
