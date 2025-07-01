const ul = document.querySelector('[data-js="ul"]')

const randomArray = ['andrew', 'julio', 'fred']
let templatHTML = ''

const generateTemplateHTML = item => {
  templatHTML += `<li>${item}</li>`
}

randomArray.forEach(generateTemplateHTML)

ul.innerHTML = templatHTML