let pessoas = [
    { nome: 'Ana', idade: 33 },
    { nome: 'Bia', idade: 33 },
    { nome: 'Carlos', idade: 18 },
]

// let pessoasComMaisDe33Anos = []
// for (let i = 0; i < pessoas.length; i++) {
//     if (pessoas[i].idade > 33) {
//         pessoasComMaisDe33Anos.push(pessoas[i])
//     } 
// }  

// let pessoasComIdadeDe33Anos = pessoas.filter(function(pessoa) {
//     return pessoa.idade === 33
// })

let pessoasComIdadeDe33Anos = pessoas.filter((pessoa) => pessoa.idade === 33)

console.log(pessoasComIdadeDe33Anos)

