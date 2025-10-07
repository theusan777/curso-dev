const calcularAnodeNascimento = function(idade, mesDeNascimento, imprimir) {
    const mesAtual = 8
    let anoDeNascimento = 2025 - idade;
    if (mesDeNascimento > mesAtual) anoDeNascimento--
    imprimir(anoDeNascimento);
}

let imprimirAnoDeNascimento = anoDeNascimento => {
    console.log('Você nasceu no ano de ' + anoDeNascimento);
}   

calcularAnodeNascimento(20, 10, imprimirAnoDeNascimento);


// function dobrar (numero) {
//     return numero * 2;
// }

// console.log(dobrar(10));


function multiplicar (multiplicador) {
    return function(numero) {
        return numero * multiplicador;
    }
}


let dobrar = multiplicar(2);
let triplicar = multiplicar(3); 

console.log(dobrar(10));
console.log(triplicar(10));