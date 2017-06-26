module.exports = function * take(n, collection) {
  for (const x of collection) {
    if (--n < 0)
      break
    yield x
  }
}
