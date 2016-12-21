/* eslint no-useless-escape: off */
const opers = /[\=\+\-\*\/\<\>\|\&\(\)]/
const chars = /\w/
const blanks = /\s/
function isOperator (char) {
  return opers.test(char)
}

function isQuote (char) {
  if (char === '\'' || char === '"') {
    return char
  } else {
    return false
  }
}

function isChar (char) {
  return chars.test(char)
}

function isBlank (char) {
  return char === '' || blanks.test(char)
}
module.exports = {
  isOperator,
  isQuote,
  isChar,
  isBlank
}
