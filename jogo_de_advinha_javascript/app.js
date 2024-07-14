alert("Seja bem-vindo ao Jogo do Número Secreto!!!");
let numSla = 10
let numSecreto = parseInt(Math.random () * numSla + 1);
console.log(numSecreto);
let chute;
let tentativas = 0;



while ( chute != numSecreto){
    tentativas++;
    chute = prompt(`Escolha um número entre 1 e ${numSla}`);
    if (chute == numSecreto){
        break
    }else{
        alert("VOCE ERROU:(");

        if (chute < numSecreto){
            alert(`${chute} E MENOR QUE O NUMERO SECRETO.`);
        }else{
            alert(`${chute} E MAIOR QUE O NUMERO SECRETO.`);
        }
    }
}

// ":" == SE NAO 
//OPERADOR TERNÁRIO
pTentativas = tentativas > 1 ? "TENTATIVAS" : "TENTATIVA";

alert(`VOCE ACERTOU O NUMERO SECRETO ${numSecreto} EM ${tentativas} ${pTentativas}`);



