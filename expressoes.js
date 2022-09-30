// declaração de função

function soma1(num1, num2) {
    return num1 + num2
}


// expressao da função

//função anonima
const soma2 = function(num1, num2) {return num1 + num2}

//uma função const não pode ser usado antes de ser declarado
console.log(soma1(1,2))
console.log(soma2(1,2));

//arrow function

const texto = nome => `meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

const maisDeUmaLinha = (num1, num2, num3) => {
    var num4 = num1 + num2 + num3
    return num4 >= 10 ? 'maior ou igual a dez' : 'menor que dez';
}

console.log(maisDeUmaLinha(1, 5, 5))