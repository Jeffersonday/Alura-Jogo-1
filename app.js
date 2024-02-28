alert('O Jogo do Número Secreto #')
let numeroSecreto = parseInt(Math.random() * 10  + 1);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt('Digite um número entre 0 e 10');

    if (chute == numeroSecreto) {
        alert(`Você acertou o Número secreto: ${chute}`);
        alert(`tentativas: ${tentativas}`);
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O numero é menor que ${chute}`);
        }
        
        if (chute < numeroSecreto) {
            alert(`O numero é maior que ${chute}`);

    }

    }

    tentativas++;
    
}  









