// boolans e comparações
console.log(true, false, 'true', 'false')

// metodos que retornam booleans
const email = 'brucewayne@email.com.br'
const includes = email.includes('@')
const notIncludes = email.includes('#')

console.log(includes, notIncludes)

const names = ['andrew', 'silva', 'herculano']

console.log(names.includes('silva'))

// operadores de comparação
const age = 20
console.log(age == 20)
console.log(age == 21)
console.log(age != 22)
console.log(age > 22)
console.log(age < 22)
console.log(age <= 20)
console.log(age === '20')