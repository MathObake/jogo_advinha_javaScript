//Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.

console.log ("SEJA BEM-VINDO!!!");

//Crie uma variável chamada "nome" e atribua a ela o seu nome.
//Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.

nome = "MATHEUS";
console.log (`OLA, ${nome}!`);

//Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .

nome = "MATHEUS";
alert (`OLA, ${nome}!`);

//Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?.
//Em seguida, armazene a resposta em uma variável e mostre no console do navegador.

res = prompt("QUAL LINGUAGEM DE PROGRAMACAO QUE VOCE MAIS GOSTA???");
console.log(res);

//Crie uma variável chamada "valor1" e outra chamada "valor2",
//atribuindo a elas valores numéricos de sua escolha. Em seguida,
//realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". 
//Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.

valor1 = parseInt(Math.random () * 10)+1;
valor2 = parseInt(Math.random () * 10)+1;

resultado = valor1 + valor2;

console.log (`A SOMA DE ${valor1} E ${valor2} E IGUAL A ${resultado}.`);

//Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha.
//Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado".
//Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.

valor1 = parseInt(Math.random () * 10)+1;
valor2 = parseInt(Math.random () * 10)+1;

resultado = valor1 - valor2;

console.log (`A DIFERENCA DE ${valor1} E ${valor2} E IGUAL A ${resultado}.`);

//Peça ao usuário para inserir sua idade com prompt.
//Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.

idade = prompt("QUAL SUA IDADE?");

//OPERADOR TERNÁRIO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
mM = idade >= 18 ? "MAIOR DE IDADE!" : "MENOR DE IDADE!";

alert (mM);

//Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero.
//Use if-else para imprimir a respectiva mensagem.

numero = prompt("INSIRA UM NUMERO.")

pN = numero > 0 ? "POSITIVO" : "NEGATIVO";

alert (`${numero} E ${pN}`);

//Use um loop while para imprimir os números de 1 a 10 no console.

numero = 0;

while (numero <= 10){
    console.log(numero);
    numero++;
}

//Crie uma variável "nota" e atribua um valor numérico a ela.
//Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

nota = 6;

if (nota >= 7){
    alert ("APROVADO!");
}else{
    alert ("REPROVADO!");
}
//Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.

console.log(parseInt(Math.random () * 1000000 + 1));

//Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.

console.log(parseInt(Math.random () * 10 + 1));

//Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.

console.log(parseInt(Math.random () * 1000 + 1));