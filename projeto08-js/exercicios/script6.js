let mensagem = prompt("Advinhe o número entre 0 e 10")

//gera um numero aleatório, multiplica por 10 e arredonda para cima ou para baixo
const randomNumber = Math.round(Math.random() * 10)
let x = 0;

while(Number(mensagem) != randomNumber){
  mensagem = prompt("Erro, tente novamente")
  x++
}

alert("Parabéns, você acertou em " + x + " tentativas")
