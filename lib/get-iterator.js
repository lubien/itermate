module.exports = function getIterator(ref) {
  if (ref.next) {
    return ref
  }

  if (!ref[Symbol.iterator])
    return new Error('Cannot iterate', ref)

  return ref[Symbol.iterator]()
}
