const primeiroNumero = 1;
const segundoNumero = 2;

const result = primeiroNumero + segundoNumero;


console.log(result);

//ponto flutuante

const numeroFlutuante = 3.3;
const numeroFlutuanteSemZero = .5;

const numeroResultado = 
numeroFlutuante / numeroFlutuanteSemZero;

console.log(numeroResultado);

// NaN

const lucas = 'Lucas';
const operacaoNan = lucas * numeroFlutuante;
console.log(operacaoNan);

// PI

const pi = Math.PI;
console.log(pi);

//Infinity

const a = 10;
const b = 0;
console.log(a/b);

//Porem 0 dividido por 0 é NaN

console.log(b/b);