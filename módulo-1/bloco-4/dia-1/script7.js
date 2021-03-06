console.log('-----Exercício 01-----')

const a = 33;
const b = 11;

let Adicao = a + b;
  console.log(Adicao);

let Subtracao = a - b;
  console.log(Subtracao);

let Multiplicacao = a * b;
  console.log(Multiplicacao);

let Divisao = a / b;
  console.log(Divisao); 

let Modulo = a % b;
  console.log(Modulo);

console.log('-----Exercício 02-----');

const num1 = 23;
const num2 = 32;

if (num1 > num2) {
  console.log(num1);
} else {
  console.log(num2);
}

console.log('-----Exercício 03-----');

const num3 = 42;
const num4 = 66;
const num5 = 150;

if (num3 > num4 && num3 > num5) {
  console.log(num3);
} else if (num4 > num3 && num4 > num5) {
  console.log(num4);
} else if (num5 > num3 && num5 > num4) {
  console.log(num5);
}

console.log('-----Exercício 04-----');

let valor = -3;

if (valor >= 0) {
    console.log('Positivo');
} else if (valor < 0) {
    console.log('Negativo');
}

console.log('-----Exercício 05-----');

const angle1 = 100;
const angle2 = 50;
const angle3 = 30;
let triangle = angle1 + angle2 + angle3;

if (triangle = 180) {
  console.log('true');
} else if (triangle > 180){
  console.log('false');
} else if (triangle < 180) {
  console.log('ERRO: ângulo inválido');
}

console.log('-----Exercício 06-----');

let pecaXadrez = 'CAVALO';

switch (pecaXadrez.toLowerCase()) {
  case 'peão':
    console.log('Move-se apenas para frente, no primeiro movimento pode andar duas casas, depois, apenas uma e captura somente para diagonal.');
    break;
  case 'bispo':
    console.log('Move-se apenas para diagonal nas casas de cor correspondente a que está.');
    break;
  case 'torre':
    console.log('Move-se apenas em linha reta.');
    break;
  case 'cavalo':
    console.log('Move-se apenas três casa em um formato de "L" duas casas para algum lado depois uma para direita ou esquerda ou uma casa para algum lado depois duas para direita ou esquerda.');
    break;
  case 'rainha':
    console.log('Move-se livremente para qualquer direção.');
    break;
  case 'rei':
    console.log('Move-se apenas uma casa livremente para qualquer direção.');
    break;
  default:
    console.log('ERRO: Peça não identificada.');
}

console.log('-----Exercício 07-----');

let nota = 32;

if (nota < 0 || nota > 100) {
  console.log('ERRO: A nota deve estar entre 0 e 100.'); 
} else if (nota >= 90) {
  console.log('A');
} else if (nota >= 80) {
  console.log('B');
} else if (nota >= 70) {
  console.log('C');
} else if (nota >= 60) {
  console.log('D');
} else if (nota >= 50) {
  console.log('E');
} else if (nota < 50) {
  console.log('F');
}

console.log('-----Exercício 08-----');

const num6 = 73;
const num7 = 39;
const num8 = 86;
let conta6 = num6 % 2;
let conta7 = num7 % 2;
let conta8 = num8 % 2;

if (conta6 == 0 || conta7 == 0 || conta8 == 0) {
  console.log('true');
} else {
  console.log('false');
}

console.log('-----Exercício 09-----');

const num9 = 289;
const num10 = 682;
const num11 = 809;
let conta9 = num9 % 2;
let conta10 = num10 % 2;
let conta11 = num11 % 2;

if (conta9 !== 0 || conta10 !== 0 || conta11 !== 0) {
  console.log('true');
} else {
  console.log('false');
}

console.log('-----Exercício 10-----');

const custo = 346.00;
const venda = 544.96;
let imposto = custo * 0.20;
let custoTotal = custo + imposto;
let lucro = venda - custoTotal;
let vendas = 1000;
let balanco = lucro * vendas; 

if (custo <= 0 || venda <= 0) {
  console.log('ERRO: valor de custo ou venda não podem ser negativos.')
} else if (balanco > 0) {
  console.log('A empresa terá um lucro de R$' + balanco);
}

console.log('-----Exercício 11-----');

let salarioBruto = 2150.00;
let INSS = [];
let IR = [];

if (salarioBruto <= 1556.94) {
  INSS = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
  INSS = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
  INSS = salarioBruto * 0.11;
} else {
  INSS = 570.88;
}

let menosINSS = salarioBruto - INSS;

if (menosINSS <= 1903.98){
  IR = 0;
} else if (menosINSS <= 2826.65) {
  IR = (menosINSS * 0.075) - 142.80;
} else if (menosINSS <= 3751.05) {
  IR = (menosINSS * 0.15) - 354.80;
} else if (menosINSS <= 4664.68) {
  IR = (menosINSS * 0.225) - 636.13;
} else if (menosINSS > 4664.68) {
  IR = (menosINSS * 0.275) - 869.36;
}

let salarioLiq = menosINSS - IR;

console.log(salarioLiq);