let jogo1 = {
    nome: 'Elden Ring',
}

let jogo2 = {
    nome: 'God of War',
}

let videoGame = {
    nome: 'PS5',        
    preco: 4500,
    usado: false,
    jogos: [jogo1, jogo2],
}


let jogo3 = {
    nome: 'Forza Horizon 5', 
}

videoGame.jogos.push(jogo3)

console.log(videoGame)


let cliente = {
    nome: 'João', 
    ultimoPedido: {
        produto: 'PS5',
        preco: 4500,
        jogos: [
             {nome: 'Elden Ring'} 
        ]
    }
}

console.log(cliente.ultimoPedido.jogos[0].nome)
