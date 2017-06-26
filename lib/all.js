module.exports = function all(pred, it) {
  for (const x of it)
    if (!pred(x))
      return false

  return true
}
