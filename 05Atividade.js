const prompt = require('prompt-sync')()

function calcularIMC() {
    // Obtém o peso e a altura do usuário 
    const peso = parseFloat(prompt("Digite seu peso em kg:"))
    const altura = parseFloat(prompt("Digite sua altura em metros:"))

    // Calcula o IMC
    const imc = peso / (altura * altura)

    // Determina a categoria de peso utilizando if-else
    if (imc < 18.5) {
        console.log("Abaixo do peso")
    } else if (imc >= 18.5 && imc < 25) {
        console.log("Peso normal")
    } else if (imc >= 25 && imc < 30) {
        console.log("Sobrepeso")
    } else {
        console.log("Obesidade")
    }
}
// Chama a função para calcular o IMC
calcularIMC()
