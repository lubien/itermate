module.exports = function * concat(collA, collB) {
  for (const x of collA)
    yield x
  for (const x of collB)
    yield x
}
