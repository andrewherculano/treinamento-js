const password = 'oi123'

if (password.length >= 12 && password.includes('1')) {
  console.log('senha forte')
} else if (password.length >= 8 || password.includes('2')) {
  console.log('a senha possui 8 ou mais caracteres')
} else {
  console.log('senha fraca')
}