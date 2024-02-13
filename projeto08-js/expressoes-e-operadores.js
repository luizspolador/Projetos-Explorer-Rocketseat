const person = {
  name: 'Luiz',
  age: 27
}

delete person.age
console.log(person) // Luiz

// exponencial 
console.log(2**2) // = 2^2


let one = 1
let two = 2

// comparação. Leva em consideração o valor
console.log(two == 1) // false
console.log(one == "1") // true

console.log(one != two) // true
console.log(one != 1) // false
console.log(one != "1") // false


//estritamente igual. Leva em consideração valor e tipo da variável
console.log(one === "1") // false
console.log(one === 1) // true

console.log(two !== "2") // true
console.log(two !== 2) // false

//OPERADOR TERNÁRIO
let pao = true
let queijo = true

const niceBreakfast = pao && queijo ? 'Café top' : 'Café ruim'

console.log(niceBreakfast) // Café top

//Falsy e Truthy
console.log(false ? 'verdadeiro' : 'falso') // falso.
//além disso, é considerado false -> 0, -0, "", null, undefined, NaN --> TODOS SÃO DENOMINADOS FALSY

//já o contrário, considerado true -> {}, [], 1, 3.23, "0", "false", -1, Infinity, - Infinity --> TODOS SÃO DENOMINADOS TRUTHY


//PROCEDÊNCIA DOS OPERADORES
// ()  ->  ! ++ ==  ->  * /  --> + - --> < <= > >=  -->  == != === !==  -> &&  -> ||  -> ?:  -> = += -= *= /=
