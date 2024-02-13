//STRINGS
//aspas simples
console.log('José')

//aspas duplas
console.log("José")

// crase permite código em bloco e expressões
console.log(`José
Luiz
Henrique`)

console.log(`Luiz ${1+1} José`) // interpolação
//-------------------------------------------------------------------------------

//NUMBERS
console.log(12) // 12
console.log(12.5) //1 2.5
console.log(12 / 2) // 6
console.log(12 / "Jose") // NaN
//-------------------------------------------------------------------------------

//BOOLEAN
console.log(true)
console.log(false)

//-------------------------------------------------------------------------------
//Undefined x null
console.log(undefined) // indefinido

console.log(null) // nulo, objeto sem nada dentro, diferente de indefinido
console.log(null === undefined) // false

//-------------------------------------------------------------------------------
//OBJECTS
console.log({
  name: "Luiz",
  idade: 36,
  andar: function(){
    console.log('andar')
  }
})

//-------------------------------------------------------------------------------
//ARRAYS
console.log(["Luiz", 36, "Henrique", 25])

