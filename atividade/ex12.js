// AND (&&)
// O operador AND, representado pelos símbolos "&&",
// é utilizado para combinar duas condições e 
// avaliar se ambas são verdadeiras. Se ambas
// as condições forem verdadeiras, o resultado
// será… verdadeiro. Caso contrário, logicamente
// será falso. Por exemplo:

let idade = 25;
let possuiCarteira = true;

// se idade é maior que 18 e possui carteira…
if (idade > 18 && possuiCarteira) {
  console.log("Pode dirigir!");
} else {
  console.log("Não pode dirigir.");
}

// OR (||)
// O operador OR, representado pelos símbolos "||",
// é usado para verificar se pelo menos uma das
// condições é verdadeira. Se uma das condições
// for verdadeira, o resultado será verdadeiro.
// Se ambas forem falsas, o resultado será falso. Veja um exemplo:


  let temMaça = false;
let temBanana = true;

// se tem maça ou tem banana…
if (temMaça || temBanana) {
  console.log("Você tem frutas!");
} else {
  console.log("Não tem frutas.");
}

// desafio js HTMLAllCollection
// @@ -0,0 +1,22 @@
deixe  título  =  documento . querySelector ( 'h1' ) ;
título . innerHTML  =  'Hora do Desafio' ;

function  exibirMensagemNoConsole ( )  {
    console . log ( 'O botão foi clicado!' )
}

function  exibirAlerta ( )  {
    alerta ( 'Eu amo Js' )
}

function  exibirPrompt ( )  {
    let  nomeDaCidade  =  prompt ( 'Digite o nome de uma cidade do Brasil que você gosta muito:' )
    alert ( `Estive em ${ nomeDaCidade } e lembrei de você` )
}

function  somandoDoisNúmeros ( )  {
    let  primeiroNumero  =  parseInt ( prompt ( 'Digite o primeiro número' ) ) ;
    let  segundoNumero  =  parseInt ( prompt ( 'Digite o segundo número' ) ) ;
    let  resultado  =  primeiroNumero  +  segundoNumero ;
    alerta ( ` ${ primeiroNumero } + ${ segundoNumero } = ${ resultado } ` )
}

// desafio igua que 

function verificarNumero(numero) {
  if (numero > 0) {
    console.log("O número é positivo.");
  } else if (numero < 0) {
    console.log("O número é negativo.");
  } else {
    console.log("O número é zero.");
  }
}