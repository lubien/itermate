const any = require('./any.js')
const equals = require('./equals.js')

module.exports = function contains(needle, collection) {
  return any(equals.bind(undefined, needle), collection)
}
