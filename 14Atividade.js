const prompt = require ('prompt-sync')()

let numero = parseInt(prompt("Digite um número para calcular o fatorial:"))
let fatorial = 1

if (numero >= 0) {
  for (let i = 1; i <= numero; i++) {
    fatorial *= i
  }
  console.log(`O fatorial de ${numero} é ${fatorial}`)
} else {
  console.log("Número inválido. O fatorial não é definido para números negativos.")
}