//boolean pra comparação

const primeiroNumero = 5;
const segundoNumero = 10;
let cadastroAtivado = true;

console.log(primeiroNumero === segundoNumero);

//null e undefined
//null: valor atribuido a uma variavel que existe e foi iniciada
//undefined: valor de uma variavel que nao foi inicializada
let input = null;  //null
let input2;  //undefined

console.log(input == input2) //true
console.log(input === input2) //false

// truthy ou falsy

//0 => false
//1 => true

console.log(0 == false)
console.log(1 == true)
console.log("" == false)

