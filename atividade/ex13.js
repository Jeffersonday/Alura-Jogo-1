// Criar uma função que exibe "Olá, mundo!" no console.

// function exibirOla() {
//     console.log("Olá, mundo!");
//   }
  
//   exibirOla();

function exibirOla(){
  console.log("Ola mundo")
}

exibirOla();

// Criar uma função que recebe um nome como parâmetro e 
// exibe "Olá, [nome]!" no console.

// function exibirOlaNome(nome) {
//     console.log(`Olá, ${nome}!`)
// }

// exibirOlaNome("Alice")

function exibirOlaNome(nome){
  console.log('ola, &{nome}')
}
  exibirOlaNome("Jefferson");

// Criar uma função que recebe um número como parâmetro
//  e retorna o dobro desse número.

// function calcularDobro(numero) {
//     return numero * 2;
//   }
  
//   let resultadoDobro = calcularDobro(5);
//   console.log(resultadoDobro);

function calculo(numero){
  return numero * 2;
}

  let resultado = calculo(5);
  console.log = (resultado);

// Criar uma função que recebe três números como 
// parâmetros e retorna a média deles.

function calcularMedia(a, b, c) {
    return (a + b + c) / 3;
  }
  
  let media = calcularMedia(4, 7, 10);
  console.log(media);

// Criar uma função que recebe dois números 
// como parâmetros e retorna o maior deles.

function encontrarMaior(a, b) {
    return a > b ? a : b;
  }
  
  let maiorNumero = encontrarMaior(15, 9);
  console.log(maiorNumero);

// Criar uma função que recebe um número como
// parâmetro e retorna o resultado da multiplicação
// desse número por ele mesmo

function quadrado(numero) {
    return numero * numero;
  }
  
  let resultado = quadrado(2);
  console.log(resultado); 

//   media

let nota1 = 7;
let nota2 = 6;
let nota3 = 3;
let nota4 = 5;

function calcularMedia(nota1, nota2, nota3, nota4) {
    let media = (nota1 + nota2 + nota3 + nota4) / 4;
    return media;
  }
  
function verificarAprovacao(media) {
    return media >= 5 ? "Aprovado" : "Reprovado";
}