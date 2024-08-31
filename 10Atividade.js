const prompt = require('prompt-sync')()

// Lendo o número digitado pelo usuário
let numero = prompt("Digite um número inteiro:")

// Verificando se o valor é um número válido
if (!isNaN(numero)) {
  for (let i = 0; i < 10; i++) { // Loop para imprimir o número 10 vezes
  }
} else {
  console.log("Digite um número válido.")
}