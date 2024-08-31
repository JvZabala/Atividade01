const prompt = require('prompt-sync')()

function menuInterativo() {
  // Apresenta o menu ao usuário
  console.log("Menu:")
  console.log("1. Opção 1")
  console.log("2. Opção 2")
  console.log("3. Opção 3")

  // Solicita a entrada do usuário
  let escolha = prompt("Escolha uma opção (1, 2 ou 3):")

  // Converte a entrada para um número
  escolha = parseInt(escolha)

  // Utiliza switch-case para executar a ação correspondente
  switch (escolha) {
    case 1:
      console.log("Você escolheu a Opção 1!")
      // código para a Opção 1
      break
    case 2:
      console.log("Você escolheu a Opção 2!")
      // código para a Opção 2
      break
    case 3:
      console.log("Você escolheu a Opção 3!")
      // código para a Opção 3
      break
    default:
      console.log("Opção inválida.")
  }
}
// Chama a função para iniciar o menu
menuInterativo()