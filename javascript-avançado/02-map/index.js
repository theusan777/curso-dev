let pessoas = [
    { nome: 'Ana', idade: 33 },
    { nome: 'Bia', idade: 33 },
    { nome: 'Carlos', idade: 18 },
]

let nomeDasPessoas = []
for (let i = 0; i < pessoas.length; i++) {
    nomeDasPessoas.push(pessoas[i].nome)
}

let nomeDasPessoas2 = pessoas.map(function(pessoa) {
    return pessoa.nome + "tem " + pessoa.idade + " anos de idade"
})

let nomeDasPessoas3 = pessoas.map((pessoa) => pessoa.nome)

console.log(nomeDasPessoas)
console.log(nomeDasPessoas2)
console.log(nomeDasPessoas3)    