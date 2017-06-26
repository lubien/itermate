module.exports = function * adjust(f, index, it) {
  let i = 0

  for (const x of it) {
    yield i++ === index ? f(x) : x
  }
}
