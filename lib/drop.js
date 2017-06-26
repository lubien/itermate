const getIterator = require('./get-iterator')

module.exports = function * drop(n, collection) {
  const it = getIterator(collection)

  let i = 0
  while (i++ < n && !it.next().done)
    ;

  for (const x of it)
    yield x
}
