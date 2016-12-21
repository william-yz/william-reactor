function judge (tokens, judges) {
  if (judges === void 0) {
    throw new Error('no assign judge functions')
  }
  if (!(judges instanceof Array)) {
    judges = [judges]
  }
  if (judges.length === 1) {
    return judges[0](tokens)
  } else if (judges.length > 1) {
    let judgesIndex = 0
    while (judgesIndex < judges.length - 1) {
      let tokensIndex = 0
      while (tokensIndex <= tokens.length) {
        let result = judge(tokens.slice(0, tokensIndex), judges.slice(0, judgesIndex + 1)) && judge(tokens.slice(tokensIndex), judges.slice(judgesIndex + 1))
        if (result) {
          return true
        }
        tokensIndex++
      }
      judgesIndex++
    }
    return false
  } else {
    throw new Error('no assign judge functions')
  }
}

module.exports = {
  judge
}
