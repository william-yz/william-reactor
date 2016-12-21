var KEY = {
  EQUAL: 1,  // ==
  NOT_EQUAL: 2, // !=
  LES_THAN: 3, // <
  GRT_THAN: 4, // >
  LES_EQUAL: 5, // <=
  GRT_EQUAL: 6, // >=
  AND: 7, //  &&
  OR: 8, // ||

  LEFT_BRA: 20, // (
  RIGHT_BRA: 21, // )

  MUL: 65, // *
  DIV: 66, // /
  MOD: 67, // %
  ADD: 68, // +
  SUB: 69 // -
}
module.exports = {
  TYPE: {
    DIGIT: 'digit',
    STRING: 'string',
    ID: 'id'
  },
  KEY: KEY,
  KEYS: {
    '==': KEY.EQUAL,  // ==
    '!=': KEY.NOT_EQUAL, // !=
    '<': KEY.LES_THAN, // <
    '>': KEY.GRT_THAN, // >
    '<=': KEY.LES_EQUAL, // <=
    '>=': KEY.GRT_EQUAL, // >=
    '&&': KEY.AND, //  &&
    '||': KEY.OR, // ||

    '(': KEY.LEFT_BRA, // (
    ')': KEY.RIGHT_BRA, // )

    '*': KEY.MUL, // *
    '/': KEY.DIV, // /
    '%': KEY.MOD, // %
    '+': KEY.ADD, // +
    '-': KEY.SUB // -
  }
}
