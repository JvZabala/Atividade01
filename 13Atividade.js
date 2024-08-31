const prompt = require ('prompt-sync')()

let soma = 0
let contador = 0

while (true) {
  let numero = parseFloat(prompt("Digite um número decimal (ou 0 para definir a média):"))

  if (numero === 0) {
    break;
  }
  soma += numero
  contador++
}
if (contador > 0) {
  let media = soma / contador
  console.log(`A média aritmética dos números é: ${media.toFixed(2)}`)
} else {
  console.log("Nenhum número foi digitado.")
}