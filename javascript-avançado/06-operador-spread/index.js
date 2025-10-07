const pessoas = ['João', 'Maria', 'José']

// console.log(...pessoas)

let pessoas1 = ['Luiz', 'Ricardo', 'Ana']
let pessoas2 = ['Marcos', 'Patricia', 'Carla']

// pessoas1= pessoas1.concat(pessoas2)

pessoas1 = [...pessoas1, ...pessoas2]

const pessoa1 = {nome: 'João', idade: 30}
const pessoa2 = {nome: 'Ana', idade: 31}

const objetoClonado = { ...pessoa1 } 
console.log(objetoClonado)