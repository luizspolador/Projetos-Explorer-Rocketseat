// var -> variável global e local. -> hoisting
var clima = "quente" 
clima = "Frio"
console.log(clima) // Frio

//let -> local. Só funciona no escopo que foi criada
let idade = 2
console.log(idade)


//const: não pode ser alterada. local. Só funciona no escopo que foi criada. pode ter o mesmo nome em diferentes escopos
const nome = "Luiz" 
//-----------------------------------------------------------


// linguagem fracamente tipada, dinâmica (tipo da variável pode ser alterado)
console.log(typeof clima) // string


//-----------------------------------------------------------
//Scope: determina a visibilidade de alguma variável no JS
{
  let x = 0
  console.log(x) // 0
}

// agrupando declarações de variáveis
let age, isHuman, lastName
age = 18
isHuman = true
lastName = "Spolador"

console.log(lastName, age, isHuman)

//concatenando valores
console.log('o ' + lastName + ' tem ' + age + ' anos')

//interpolando valores com template literals/strings
console.log(`o ${lastName} tem ${age} anos`)

const animals = ['Lion', 'Monkey', {nome: 'Cat', idade: 2}]
console.log(animals[2].nome) // Cat
console.log(animals[2].age) // 2
console.log(animals[0]) // Lion