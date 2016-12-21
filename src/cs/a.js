var analyze = require('./syntax')
var Symbol = require('./Symbol')

Symbol.setSymbol('aaa', 5)
Symbol.setSymbol('b23bb', 3)
Symbol.setSymbol('a2', 5)
Symbol.setSymbol('aaaaa', 1112)
var input = `
  aaa== (b23bb + 21) + a2 * 2 + 123*1111- (1111* aaaaa)
`
var tokens = []
var word = /\w/
var oper = /[=+-*/<>|&()]/
var blank = /\s/
function handleWord (input, index, token, char) {
  if (token.type === 'oper') {
    delete token.type
    tokens.push(token)
    parse(input, index + 1, {token: char, type: 'exp', index})
  } else {
    if (token.token) {
      token.token += char
      parse(input, index + 1, token)
    } else {
      parse(input, index + 1, {token: char, type: 'exp', index})
    }
  }
}

function handleOper (input, index, token, char) {
  if (token.type === 'exp') {
    delete token.type
    tokens.push(token)
    parse(input, index + 1, {token: char, type: 'oper', index})
  } else {
    if (token.token) {
      token.token += char
      parse(input, index + 1, token)
    } else {
      parse(input, index + 1, {token: char, type: 'oper', index})
    }
  }
}
function parse (input, index, token) {
  if (index === input.length) {
    return
  }
  var char = input.charAt(index)
  if (word.test(char)) {
    handleWord(input, index, token, char)
  } else if (oper.test(char)) {
    handleOper(input, index, token, char)
  } else if (blank.test(char)) {
    if (token.token) {
      delete token.type
      tokens.push(token)
    }
    parse(input, index + 1, {})
  }
}

parse(input, 0, {})
console.log(tokens)
analyze(tokens)
console.log(tokens)
