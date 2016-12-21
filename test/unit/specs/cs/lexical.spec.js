const lexical = require('src/cs/lexical')

describe('test lexical', function () {
  describe('test isOperator()', function () {
    it('valid operator', function () {
      // const opers = /[=+-*/<>|&()]/
      let char1 = '='
      let char2 = '+'
      let char3 = '-'
      let char4 = '*'
      let char5 = '/'
      let char6 = '<'
      let char7 = '>'
      let char8 = '|'
      let char9 = '&'
      let char10 = '('
      let char11 = ')'
      expect(lexical.isOperator(char1)).to.be.true
      expect(lexical.isOperator(char2)).to.be.true
      expect(lexical.isOperator(char3)).to.be.true
      expect(lexical.isOperator(char4)).to.be.true
      expect(lexical.isOperator(char5)).to.be.true
      expect(lexical.isOperator(char6)).to.be.true
      expect(lexical.isOperator(char7)).to.be.true
      expect(lexical.isOperator(char8)).to.be.true
      expect(lexical.isOperator(char9)).to.be.true
      expect(lexical.isOperator(char10)).to.be.true
      expect(lexical.isOperator(char11)).to.be.true
    })
    it('invalid operator', function () {
      // const opers = /[=+-*/<>|&()]/
      let char1 = 'asdasd'
      let char2 = '1213'
      let char3 = ' '
      let char4 = '\n'
      let char5 = '\t'
      let char6 = ''
      expect(lexical.isOperator(char1)).to.be.false
      expect(lexical.isOperator(char2)).to.be.false
      expect(lexical.isOperator(char3)).to.be.false
      expect(lexical.isOperator(char4)).to.be.false
      expect(lexical.isOperator(char5)).to.be.false
      expect(lexical.isOperator(char6)).to.be.false
      expect(lexical.isOperator()).to.be.false
    })
  })

  describe('test isQuote()', function () {
    it('is Quote', function () {
      expect(lexical.isQuote('\'')).to.equal('\'')
      expect(lexical.isQuote('"')).to.equal('"')
    })

    it('is not quote', function () {
      expect(lexical.isQuote('a')).to.be.false
      expect(lexical.isQuote('')).to.be.false
      expect(lexical.isQuote(' ')).to.be.false
      expect(lexical.isQuote('*')).to.be.false
    })
  })

  describe('test isChar()', function () {
    it('is char', function () {
      expect(lexical.isChar('a')).to.be.true
      expect(lexical.isChar('4')).to.be.true
    })

    it('is not char', function () {
      expect(lexical.isChar('$')).to.be.false
      expect(lexical.isChar('')).to.be.false
      expect(lexical.isChar(' ')).to.be.false
      expect(lexical.isChar('"')).to.be.false
    })
  })

  describe('test isBlank()', function () {
    it('is blank', function () {
      expect(lexical.isBlank('')).to.be.true
      expect(lexical.isBlank(' ')).to.be.true
      expect(lexical.isBlank('\n')).to.be.true
      expect(lexical.isBlank('\t')).to.be.true
    })

    it('is not blank', function () {
      expect(lexical.isBlank('$')).to.be.false
      expect(lexical.isBlank('a')).to.be.false
      expect(lexical.isBlank('1')).to.be.false
      expect(lexical.isBlank('"')).to.be.false
    })
  })
})
