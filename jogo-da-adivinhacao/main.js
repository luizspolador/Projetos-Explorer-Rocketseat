//variáveis
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnAgain = document.querySelector("#btnAgain")

//eventos
btnTry.addEventListener('click', handleTryClick)
btnAgain.addEventListener('click',handleAgainClick)
document.addEventListener('keydown', verifyEnter)

//funções
function handleTryClick(event) {
  event.preventDefault()
  
  const inputNumber = document.querySelector("#inputNumber")
  if(inputNumber.value < 0 || inputNumber.value > 10){
    inputNumber.value = ""
    alert("O valor digitado deve ser entre 1 e 10")
  }

  if(Number(inputNumber.value) == randomNumber){
    toggleScreen()
    screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas!`
  }
  inputNumber.value = ""
  xAttempts++
}

function handleAgainClick() {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function verifyEnter(e){
  if(e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleAgainClick()
  }
}

