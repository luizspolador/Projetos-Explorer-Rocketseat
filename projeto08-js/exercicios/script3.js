/*
capturar 2 números e fazer as operações matemáticas de soma, subtração, multiplicação, divisão e resto da divisão
*/

let number01 = prompt("Informe o primeiro número: ")
number01 = Number(number01)
let number02 = prompt("Informe o segundo número: ")
number02 = Number(number02)

const soma = number01 + number02
alert("A soma do número " + number01 + " e " + number02 + " é igual a " + soma)

const subtracao = number01 - number02
alert("A subtração do número " + number01 + " e " + number02 + " é igual a " + subtracao)

const multiplicacao = number01 * number02
alert("A multiplicação do número " + number01 + " e " + number02 + " é igual a " + multiplicacao)

const divisao = number01 / number02
alert("A divisão do número " + number01 + " e " + number02 + " é igual a " + divisao)

const resto = number01 % number02
alert("O resto da divisão do número " + number01 + " e " + number02 + " é igual a " + resto)

