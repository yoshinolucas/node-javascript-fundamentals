function retornaTexto(texto) {
    console.log(texto)
}

retornaTexto('Olá Mundo!');

//function sem parametro

function soma() {
    return 2+2;
}

console.log(soma())

function subtracao(num1 = 1, num2 = 1) {
    return num1 - num2
}


console.log(subtracao(soma(),1))

console.log(subtracao())