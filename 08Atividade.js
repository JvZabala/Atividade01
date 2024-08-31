function ordenarDoisNumeros(num1, num2) {
    // Verifica qual número é menor e o atribui a uma variável
    let menor, maior
    if (num1 < num2) {
      menor = num1
      maior = num2
    } else {
      menor = num2
      maior = num1
    }
  
    // Imprime os números em ordem crescente
    console.log(menor, maior)
  }
  
  // Exemplo de uso:
  ordenarDoisNumeros(10, 5) // Imprime: 5 e 10
  ordenarDoisNumeros(7, 7) // Não faz nada, pois números iguais