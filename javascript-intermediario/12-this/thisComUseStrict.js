'use strict';

// console.log(this)
// console.log(window === this) 

// this.name = 'Matheus';
// function saudar () {
//     console.log('this no contexto da funcao', this);
//     console.log('Olá, ' + this.name + '!');
// }

// saudar();

// let usuario = {
//     nome: 'Matheus',
//     saudar: function() {
//         console.log('this no contexto do metodo', this);
//         console.log('this no contexto do metodo', this.nome);
//     },
// }

// usuario.saudar();


let comida = {
    nome: 'Brocolis',
    temperatura: 0,
 }

 comida.cozinhar = function(temperaturaDeCozimento) {
    console.log('this no contexto do objeto comida', this);
    this.temperatura = temperaturaDeCozimento;
 }

 console.log(comida)

 comida.cozinhar(180);

 console.log(comida);