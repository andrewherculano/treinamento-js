// arrays
let heroes = ['superman', 'batman', 'flash']

console.log(heroes[1]) // acessando o item do array através do index

heroes[1] = 'lanterna verde' // atribuindo um novo valor a um item do array
console.log(heroes[1])

// metodos de array

/**O metodo join retorna uma string separa por virgula com todos os elementos
 * do array. Ele nao altera o array original, podendo ser passado uma string como
 * parametro do metodo.
 */
console.log(heroes.join('-'))
console.log(heroes.indexOf('superman'))
console.log(heroes.concat(['wowverine', 'deadpool']))

/**O metodo push altera o array original, inserindo os itens que foram passados
 * por parametro.
 */
console.log(heroes.push('ironman', 'hulk'))
console.log(heroes)

console.log(heroes.pop())