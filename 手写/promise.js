/**
 * Promise.all
 */
function all(promises) {
  return new Promise(async function (resolve, reject) {
    const len = promises.length
    const res = []
    for (let i = 0; i < len; i++) {
      try {
        const r = await promises[i]
        res.push(r)
      } catch (e) {
        reject(e)
      }
    }

    resolve(res)
  })
}

const promises = [
  // Promise.reject('1111'),
  // 'set',
  Promise.resolve(2),
  Promise.reject('error'),
  Promise.resolve(3),
  new Promise(function (resolve) {
    setTimeout(function () {
      console.log(333)
      resolve('setTimeout')
    }, 100)
  })
]

Promise.all(promises)
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })

all(promises)
  .then(res => {
    console.log(res, 'a;;')
  })
  .catch(err => {
    console.log(err, 'a;;')
  })

function all2(promises) {
  return new Promise((resolve, reject) => {
    const len = promises.length
    const res = []
    for (let i = 0; i < len; i++) {
      Promise.resolve(promises[i])
        .then(p => {
          res.push(p)
          if (i === len - 1) {
            resolve(res)
          }
        })
        .catch(err => reject(err))
    }
  })
}

all2(promises)
  .then(r => {
    console.log(r, 8888)
  })
  .catch(err => {
    console.log(err, 8888)
  })

race(promises)
  .then(value => {
    console.log(value, 777)
  })
  .catch(err => {
    console.log(err)
  })

race2(promises)
  .then(value => {
    console.log(value, 7772)
  })
  .catch(err => {
    console.log(err)
  })

function race(promises) {
  return new Promise(async (resolve, reject) => {
    for (let item of promises) {
      try {
        const r = await item
        return resolve(r)
      } catch (err) {
        return reject(err)
      }
    }
  })
}

function race2(promises) {
  return new Promise(async (resolve, reject) => {
    for (let item of promises) {
      Promise.resolve(item)
        .then(value => {
          return resolve(value)
        })
        .catch(err => reject(err))
    }
  })
}
