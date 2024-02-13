let nome = prompt("Informe o seu nome: ")

let nota01 = prompt("nota 01: ")
let nota02 = prompt("nota 02: ")
let nota03 = prompt("nota 03: ")


let media = (Number(nota01) + Number(nota02) + Number(nota03)) / 3
media = media.toFixed(2)

function statusAluno(){
  if(media < 6) {
    alert("O aluno " + nome + " não foi aprovado. Sua média foi " + media)
  } else {
    alert("O aluno " + nome + " foi aprovado. Sua média foi " + media)
  }
}

statusAluno()

