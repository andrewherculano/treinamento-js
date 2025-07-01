// callback
const myFunc = callback => {
  const value = 1871
  callback(value)
}

myFunc(number => console.log(number))

//foreach
const socialNetworks = ['youtube', 'twitter', 'facebook', 'instagram']

const logArrayInfo = (item, index, array) => console.log(item, index, array)
socialNetworks.forEach(logArrayInfo)