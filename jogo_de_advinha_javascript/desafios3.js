//Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.


cont = 0;

while (cont <= 10){
    alert(`NUMERO >>> ${cont}`)
    cont++;
}

//Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.


cont = 10;

while (cont >= 0){
    alert(`NUMERO >>> ${cont}`);
    cont--;
}

//Crie um programa de contagem regressiva. 
//Peça um número e conte deste número até 0, usando um loop while no console do navegador.

num = prompt('INSIRA UM NUMERO');

while(num >= 0){
    console.log(`NUMERO ${num}`);
    num--;
}

//Crie um programa de contagem progressiva. 
//Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

num = prompt('INSIRA UM NUMERO');
let cont2 = 0;

while(cont2 <= num){
    console.log(`NUMERO ${cont2}`);
    cont2++;
}