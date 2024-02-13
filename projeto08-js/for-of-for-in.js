let name = 'Luiz'

let names = ['João', 'Paulo', 'Pedro']


//FOR OF

for (let char of name) {
  console.log(char)  // imprime cada caracteres de name
}

for (let name of names) {
  console.log(name) // imprime cada elemento do vetor
}


// FOR IN
let person = {
  name: 'John',
  age: 30,
  weight: 85.2
}

for (let property in person){
  console.log(property)  // imprime as propriedades do objeto person
}