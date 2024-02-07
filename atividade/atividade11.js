// Contador que vai de 1 a 10
let cont = 1;
while (cont <= 10){
    console.log(cont);
    cont++ ;
}


//Contador que vai da 10 a 0
let cont = 10;
while (cont >= 0){
    console.log(cont);
    cont-- ;
}

//Contagem regressiva
let numMaximo = prompt('Digite um número para a contagem regresssiva');
while(numMaximo >= 0){
    console.log(numMaximo);
    numMaximo--;
}

//Contagem progressiva
let numMaximo = prompt('Digite um número para a contagem progressiva');
let cont = 0;
while(cont <= numMaximo) {
    console.log(cont);
    cont++;
}
