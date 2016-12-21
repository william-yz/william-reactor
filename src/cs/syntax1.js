var constant = require('./constant')
var TYPE = constant.TYPE
var KEY = constant.KEY
var KEYS = constant.KEYS

function analyze (input) {
  input.forEach(tokenO => {
    var token = tokenO.token
    var k = is(token)
    tokenO.type = k.type
    tokenO.token = k.token
  })
}

function is (token) {
  var type
  if (/^\d+$/.test(token)) {
    type = TYPE.DIGIT
    token = Number(token)
  } else if (/^'.*'$/.test(token) || /^".*"$/.test(token)) {
    type = TYPE.STRING
  } else {
    if (KEYS[token]) {
      type = KEYS[token]
    } else {
      type = TYPE.ID
    }
  }
  return {
    type,
    token
  }
}

function judge (tokens, judges) {
  if (!(judges instanceof Array)) {
    judges = [judges]
  }
  if (judges.length === 1) {
    return judges[0](tokens)
  }
  if (judges.length === 2) {
    let index = 0
    while (index <= tokens.length) {
      return judges[0](tokens.slice(0, index)) && judges[1](tokens.slice(index))
    }
  }
  if (judges.length > 2) {
    let index = 0
    while (index < judges.length - 1) {
      return judge(tokens, judges.slice(0, index + 1)) && judge(tokens, judges.slice(index + 1))
    }
  }
}

function isFactor (tokens) {
  return judge(tokens, isExpression) ||
    (tokens.length === 1 && tokens[0].type === TYPE.ID) ||
    (tokens.length === 1 && tokens[0].type === TYPE.DIGIT)
}

function isExpression (tokens) {
  return judge(tokens, [isDeterminer, isItem])
}

function isDeterminer (tokens) {
  return judge(tokens, [isFactor, isFactorRecursion])
}

function isFactorRecursion (tokens) {
  return tokens.length === 0 ||
    (tokens.length === 3 &&
      (tokens[0].type === KEY.DIV || tokens[0].type === KEY.MUL) &&
      judge(tokens.slice(1), isFactor, isFactorRecursion))
}

function isItem (tokens) {
  return tokens.length === 0 ||
    (tokens.length === 3 &&
      (tokens[0].type === KEY.ADD || tokens[0].type === KEY.SUB) &&
      judge(tokens.slice(1), isDeterminer, isItem))
}

module.exports = analyze
