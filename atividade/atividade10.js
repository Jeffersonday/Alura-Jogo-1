// let contador = 1;

// while (contador < 4) {
//   console.log('Executando a iteração ' + contador);
//   contador = contador + 1;
// }

// colega
// let qtdNumeros = parseInt(prompt('Digite a quantidade de números para o cálculo da média:'));
// let soma = 0;
// let contador = qtdNumeros;

// while(contador > 0){
//     let numero = parseInt(prompt('Digite o numero:'));
//     soma += numero;
//     contador--;
// }

// let media = soma / qtdNumeros;

// console.log(media);

// Desafio
// let qtdNumeros = prompt('Digite a quantidade de números para o cálculo da média:');
// let soma = 0;
// let contador = qtdNumeros;

// while(contador > 0){
//     let numero = parseInt(prompt('Digite o numero:'));
//     soma += numero;
//     contador--;
// }

// let media = soma / qtdNumeros;

// console.log(media);

let vezes = prompt('Digite a quantidade de numeros');
let soma = 0;
let contador = vezes;

    while (contador == 0) {
        console.log('Digite um valor acima de 0');

        break;
    }

    while (contador > 0) {
        let numero = parseInt(prompt('Digite o numero: '));
        soma += numero;
        contador--;   

        }
        

let media = soma / vezes;
console.log(media);
