module.exports = function any(pred, it) {
  for (const x of it)
    if (pred(x))
      return true

  return false
}
