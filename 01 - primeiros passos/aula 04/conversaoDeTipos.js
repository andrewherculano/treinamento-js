let score = '100'
score = Number(score)

console.log(score + 1)
console.log(typeof score)

const crazyConversion = Number('maça')
const numberConversion = String(97)
const booleanConversion = Boolean(10)
console.log(crazyConversion, numberConversion, booleanConversion)

/**
 * Valores falsy:
 * - false
 * - 0
 * - null
 * - ""
 * - undefined
 * - NaN
 * 
 * Valores truthy:
 * - Qualquer valor que não é falsy
 */