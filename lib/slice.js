const getIterator = require('./get-iterator.js')

module.exports = function * slice(start, end, collection) {
  const it = getIterator(collection)
  let i = 0

  while (i++ < start && !it.next().done)
    ;

  for (const x of it) {
    if (i++ > end)
      break

    yield x
  }
}
