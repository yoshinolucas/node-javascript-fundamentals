// var: usado em qualquer ocasiao e é lido primeiro

var altura = 5;
var comprimento = 7;

// o node declara variavel sozinho
area = altura * comprimento;
console.log(area);
var area;

//let: precisa ser declarado antes

let areaLet;
areaLet = altura * comprimento;
console.log(areaLet);

//const: 
//const não pode ser declarada sem valor
const FIXO = 'Brasil é um país';




