module.exports = function * append(x, collection) {
  for (const y of collection)
    yield y
  yield x
}
