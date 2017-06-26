module.exports = function list(it) {
  const xs = []

  for (const value of it)
    xs.push(value)

  return xs
}
