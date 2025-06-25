// if
const age = 19

if (age > 18) {
  console.log('voce tem mais de 18 anos')
}

const simpsons = ['homer', 'lisa', 'bart', 'marge']

if (simpsons.length >= 5) {
  console.log('o array tem bastante personagens')
}

// else if
const password = 'oi123123122111'

if (password.length >= 8) {
  console.log('essa senha possui 8 ou mais caracteres')
} else {
  console.log('a senha deve conter 8 ou mais caracteres')
}

if (password.length >= 12) {
  console.log('senha forte')
} else if (password.length >= 8) {
  console.log('a senha possui 8 ou mais caracteres')
} else {
  console.log('senha fraca')
}