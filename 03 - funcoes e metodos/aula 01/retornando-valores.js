const doubleNumber = function (number) {
  const result = number * 2
  return result
}

const resultDoubleNumber = doubleNumber(4)

const showResult = function(value) {
  const message = `O valor é ${value}`
  return message
}

console.log(showResult(resultDoubleNumber))