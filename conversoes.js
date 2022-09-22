// conversao implicita

var numero = 456
var numeroString = '456'

console.log(numero == numeroString) 
//false com ===  (comparação do valor e tipo)
//true com ==    (comparação do valor)
console.log(numero + numeroString) 
//456456

console.log(numero + Number(numeroString)) 
//912



// conversao explicita