//Mostre um alerta com a mensagem "Boas vindas ao nosso site!".

alert ('Seja bem-vindo ao nosso site!!!');

//Declare uma variável chamada nome e atribua a ela o valor "Lua".

let nome = ("Lua");

//Crie uma variável chamada idade e atribua a ela o valor 25.

let idade = (25);

//Defina uma variável numeroDeVendas e atribua a ela o valor 50.

let numeroDeVendas = (50);

//Defina uma variável saldoDisponivel e atribua a ela o valor 1000.

let saldoDisponivel = (1000);

//Exiba um alerta com o texto "Erro! Preencha todos os campos"

alert ('Erro! Preencha todos os campos.');

//Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos" Agora exiba um alerta com o valor da variável mensagemDeErro.

let mensagemDeErro = ('Erro! Preencha todos os campos.');

//Use um prompt para perguntar o nome do usuário e armazená-lo na variável nome.

let nomeUser = prompt("Qual é o nome do usuário???");

//Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.

let idadeUser = prompt("Qual sua idade???");

//Agora, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".

if (idadeUser >= 18){
    console.log(nomeUser + " pode tira habilitação!!!");
}