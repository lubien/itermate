module.exports = function * chain(f, collection) {
  for (const x of collection) {
    const mapped = f(x)

    if (mapped.length)
      for (const y of mapped)
        yield y
    else
      yield mapped
  }
}
