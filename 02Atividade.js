const prompt = require('prompt-sync')() // Permite a entrada do usuário no terminal.

let age = Number(prompt('Informe a sua idade: ')) // Solicita a idade do usuário.

let ageRange // Declara uma variável para armazenar a faixa etária.

if (age >= 1 && age <= 12) { // Verifica se a idade está entre 1 e 12.
  ageRange = 'criança' // Se a condição for verdadeira, atribui 'criança' à variável ageRange. 
} else if (age >= 13 && age < 18) { 
  ageRange = 'adolescente'
} else if (age >= 18 && age < 65) { 
  ageRange = 'adulto'
} else { // Caso nenhuma das condições anteriores seja verdadeira.
  ageRange = 'idoso'
}

console.log(`Você é um(a) ${ageRange}.`); // substitui [faixa etária] pelo valor armazenado em ageRange.