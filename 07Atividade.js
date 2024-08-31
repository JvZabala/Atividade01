function calcularValorMacas(quantidade) {
    const precoPorDuzia = 0.25
    const precoUnitario = 0.30
  
    // Verifica se a quantidade é maior ou igual a uma dúzia (12)
    if (quantidade >= 12) {
      // Calcula o valor total com base no preço por dúzia
      const valorTotal = quantidade * precoPorDuzia
      return valorTotal
    } else {
      // Calcula o valor total com base no preço unitário
      const valorTotal = quantidade * precoUnitario
      return valorTotal
    }
  }
  
  // Exemplo de uso:
  const quantidadeComprada = 15 // Valor X
  const valorTotal = calcularValorMacas(quantidadeComprada)
  
  console.log("Quantidade de maçãs compradas:", quantidadeComprada)
  console.log("Valor total da compra: R$", valorTotal.toFixed(2))