// var: usado em qualquer ocasiao e é lido primeiro

var altura = 5;
var comprimento = 7;

// o node declara variavel sozinho e var pode ser reatribuido em qualquer escopo
area = altura * comprimento;
console.log(area);
var area;

//let: precisa ser declarado antes, e só funciona no proprio escopo

let areaLet;
areaLet = altura * comprimento;
console.log(areaLet);

//const: 
//const não pode ser declarada sem valor
const FIXO = 'Brasil é um país';

//typeof

let numero = 1;
let nome = 'Sofia';

console.log(typeof numero)
console.log(typeof nome)

let varNull = null;
let varUnd;

console.log(typeof varNull) //object  *bug
console.log(typeof varUnd)  //undefined




