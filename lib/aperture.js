const getIterator = require('./get-iterator.js')

module.exports = function * aperture(n, collection) {
  const it = getIterator(collection)
  const acc = []
  let i = 0

  for (const x of it) {
    acc.push(x)
    if (++i >= n) break
  }

  if (acc.length !== n) return

  while (true) {
    // slice with no arguments to clone
    yield acc.slice()

    const {done, value} = it.next()
    if (done) return

    acc.shift()
    acc.push(value)
  }
}
