/* 
strings ==> strings podem ser declaradas em váriaveis utilizando
aspas simples '' ou aspas duplas "" 
*/
console.log('hello, world')

const email = 'andrew@email.com.br'
console.log(email)

/* 
concatenando strings ==> a concatenação de strings podem ser realizadas
de duas maneiras utilizando a forma mais antiga que é utilizando o +, ou pode
ser feita através de template strings utilizando `${nomeDaVariavel}` 
*/
const firstName = 'Luis'
const lastName = 'Fabiano'
const fullName = firstName + ' ' + lastName
console.log(fullName)

const fullNameTwo = `${firstName} ${lastName}`
console.log(fullName)

/* acessando caracteres */
const randomWord = 'Pamonha'
console.log(randomWord[0], randomWord[6])

/* comprimento de uma string */
console.log(randomWord.length)

/* 
metodos de strings ==> existem diversos metodos de strings nativas em js podem
ser invocadas através do string.nomeDoMetodo(), alguns metodos necessitam de 
argumentos por exemplo como o indexOf(). 
*/
console.log(randomWord.toUpperCase())
console.log(randomWord.toLowerCase())

const index = email.indexOf('@')
console.log(index)

const lastIndexOfA = randomWord.lastIndexOf('a') /* obtem a posição do ultimo
caractere informado no argumento do metodo */
console.log(lastIndexOfA)

const slice = randomWord.slice(1, 4) /* recorta a string com de acordo com o
argumento passado no metodo */
console.log(slice)

const nome = 'lara'
console.log(nome.replace('l', 'y')) /* substituir string */