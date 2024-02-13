function createPhrases(){
  console.log('aaaaaa')
  console.log('bbbbb')
  console.log('ccccc')
}

createPhrases()

//-------------------------------
// função anonima
const sum = function(number1, number2){
  console.log(number1 + number2)
}

sum(2, 3) // 5

//----------------------------------
const minus = function(number1, number2){
  let total = number1 - number2
  return total
}

let x = 34
let y = 25

console.log(`o numero 1 é ${x}`)
console.log(`o numero 2 é ${y}`)
console.log(`a soma é ${min(x, y)}`)

// arrow function

const sayMyName = (name) => {
  console.log(name)
}

sayMyName('Luiz')

// função construtora
function Person(name){
  this.name = name
}

const alguem = new Person("Luiz")
console.log(alguem) // Luiz



