if(true){
    const mensagem = 'Escopo de bloco';
}

console.log(mensagem); 


{
    const mensagem = 'Escopo de bloco';
    console.log(mensagem);
}

function falar () {
    var mensagem = 'Escopo de função';
    console.log(mensagem);
}

falar();
console.log(mensagem); 