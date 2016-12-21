const symbols = {}

function getSymbol (id) {
  return symbols[id]
}

function setSymbol (id, value) {
  symbols[id] = value
}

module.exports = {
  getSymbol,
  setSymbol
}
