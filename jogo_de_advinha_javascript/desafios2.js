//Pergunte ao usuário qual é o dia da semana.
// Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!".
// Caso contrário, mostre "Boa semana!".

DSem = prompt ("QUAL É O DIA DA SEMANA?????");

if (DSem == "SABADO" || DSem == "DOMINGO"){

    alert("BOM FIM DE SEMANA!!!!");

}else{
    alert("BOA SEMANA!!!");
}

//Verifique se um número digitado pelo usuário é positivo ou negativo. 
//Mostre um alerta informando.

userNum = prompt ("INSIRA UM NÚMERO");

if (userNum < 0){
    alert(`O NÚMERO ${userNum} é negativo!`);
}else{
    alert(`O NÚMERO ${userNum} é positivo!`);

}

//Crie um sistema de pontuação para um jogo.
// Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!".
// Caso contrário, mostre "Tente novamente para ganhar.".

pontP = prompt("Insira a sua pontuação atual");

if (pontP >= 100){
    alert ("VOCE GANHOU!");
}else{
    alert("Voce perdeu:[");
}