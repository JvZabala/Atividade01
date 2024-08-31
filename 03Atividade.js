// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

function classificarNota(grade) {
    // Verifica se a nota está dentro do intervalo válido, de 0 a 10.

    if (grade < 0 || grade > 10) {
      return "Nota inválida"
    }
  
    if (grade >= 7) { // Classifica a nota
      return "Aprovado"
    } else if (grade >= 5) {
      return "Recuperação"
    } else {
      return "Reprovado"
    }
  }