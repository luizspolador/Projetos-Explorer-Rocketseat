//Type coersion - próprio JS faz a conversão de tipos
console.log('5' + 9) // 59

//Typecasting
console.log(Number('5') + 9) // 14

let number = 524.654654
console.log(number.toFixed(2)) // 524.65

//trocar ponto por vírgula
console.log(number.toFixed(2).replace(".", ",")) // 524,65 --> dado vira uma String

//maiusc e minusc
let word = "oie"
console.log(word.toLowerCase) // oie
console.log(word.toUpperCase) // OIE

//separando Strings

let phrase = "Puta que pariu"
let myArray = phrase.split(" ") // separa em um array onde tive espaço

let phraseWithUnderscore = myArray.join("_") // junta o array e onde era espaço coloca um _


//encontrando uma palavra em um texto
let frase = "Palmeiras não tem mundial"
console.log(phrase.includes("mundial")) // true. É CASE SENSITIVE

// array com construtor
let outroArray = new Array('a', 'b', 'c')


//transformando uma cadeia de caracteres em elementos de uma array
let palavra = "manipulação"
console.log(Array.from(palavra)) // array com 11 posições, cada um com um caracter


//MANIPULANDO ARRAYS
let techs = ["html", "css", "js", "java", "thymeleaf"]

//add no fim do array
console.log(techs.push("nodejs"))

//add no começo do array
console.log(techs.unshift("sql"))

//remove do fim
console.log(techs.pop())

// remove do começo
console.log(techs.shift())

//pega alguns elementos
console.log(techs.slice(1, 3)) // pega a partir do elemento 1 até o elemento 3. -> css, js, java

//remover 1 ou mais items em qualquer posição do array
console.log(techs.splice(1, 2)) // retira os elementos css, js

//encontra a posição de um elemento no array
let index = techs.indexOf('css') 