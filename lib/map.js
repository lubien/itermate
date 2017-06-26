module.exports = function * map(f, it) {
  for (const x of it)
    yield f(x)
}
