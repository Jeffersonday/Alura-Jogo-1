// Desafio 01
// Pergunte ao usuário qual é o dia da semana.
// Veja a resposta para "Sábado" ou "Domingo", 
// mostre "Bom fim de semana!".
// Caso contrário, mostre "Boa semana!".

let dia = prompt('Qual o dia da semana? ');

let sabado = 'sabado';
let domingo = 'domingo';

if (sabado == dia ) {
console.log(`Hoje e ${sabado}. Bom final de semana!!!`);

}else if (domingo == dia ) {  
    console.log(`Hoje e ${domingo}. Bom final de Semana!!!`);
} else {
    console.log('Digite Sabado ou domingo');
}

// Desafio 02
// Verifique se o número digitado pelo usuário é positivoou negativo.
// Mostre um alerta informando.

let numero = prompt('Digite um positivo ou Negativo');

if (numero > 0) {
    alert('Numero positivo!');
} else {
    alert('Numero negativo!');
}

// Desafio 03
// Crie um sistema de pontuação para um jogo.
// Se a pontuação for maior ou igual a 100, 
// mostre "Parabéns, você venceu!" nenhum console do navegador.
// Caso contrário, mostre "Tente novamente para ganhar.".

let pontuacao = 105;

if (pontuacao > 100) {
    console.log('Parabéns, você venceu!');
} else {
    console.log('Tente Novamente');
}

// Desafio 04
// Crie uma mensagem que informa o usuário
// sobre o saldo da conta,
// usando uma string de modelo para incluir o valor do saldo.

let saldoConta = 500;
alert(`Seu saldo é de ${saldoConta}.`);

// Desafio 05
// Peça ao usuário para inserir seu nome usando prompt.
// Em seguida, mostre um alerta de boas-vindas usando esse nome.

let nome = prompt('Qual o seu nome?')
alert(`Boas Vindas ${nome}`);