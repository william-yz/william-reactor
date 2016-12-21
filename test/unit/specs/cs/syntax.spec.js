const syntax = require('src/cs/syntax')
const _ = require('lodash')
describe('test syntax', function () {
  describe('test judge()', function () {
    it('test common judge one function', function () {
      let isNumber = array => _.every(array, _.isNumber)
      let isEven = array => _.every(array, i => i % 2 === 0)
      expect(syntax.judge([1, 2, 3, 4], isNumber)).to.be.true
      expect(syntax.judge([1, 2, 3, 4], isEven)).to.be.false
    })

    it('test common judge two functions', function () {
      let isNumber = array => _.every(array, _.isNumber)
      let isEven = array => _.every(array, i => i % 2 === 0)
      let isString = array => _.every(array, _.isString)

      expect(syntax.judge([1, 2, 3, 4], [isNumber, isEven])).to.be.true
      expect(syntax.judge([1, 2, 3, 4], [isString, isEven])).to.be.false
    })

    it('test common judge more than two functions', function () {
      let isNumber = array => _.every(array, _.isNumber)
      let isEven = array => _.every(array, i => i % 2 === 0)
      let isString = array => !_.isEmpty(array) && _.every(array, _.isString)

      expect(syntax.judge([1, 2, 3, 4], [isNumber, isString, isEven])).to.be.false
      expect(syntax.judge([1, '2', 3, 4], [isNumber, isString, isEven])).to.be.false
      expect(syntax.judge([1, 2, '3', 4], [isNumber, isString, isEven])).to.be.true
    })

    it('test common judge no function', function () {
      expect(syntax.judge.bind(this, [1, 2, 3, 4], [])).to.throw(Error)
      expect(syntax.judge.bind(this, [1, 2, 3, 4])).to.throw(Error)
    })
  })
})
