const prompt = require('prompt-sync')()

let soma = 0 // Inicializa a variável soma com 0

for (let i = 0; i < 5; i++) {
  let numero = parseFloat(prompt("Digite o " + (i+1) + "º numero:"))
  soma += numero // Adiciona o número digitado à soma
}

console.log("A soma dos números é:", soma)