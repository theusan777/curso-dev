let ordens = [
    { cliente: 'Matheus', tipo: 'compra', quantidade: 56, ativo: 'NFLX34' },
    { cliente: 'Ana', tipo: 'venda', quantidade: 34, ativo: 'AAPL34' },
    { cliente: 'Carlos', tipo: 'compra', quantidade: 23, ativo: 'TSLA34' },
    { cliente: 'Bia', tipo: 'venda', quantidade: 45, ativo: 'AMZO34' },
    { cliente: 'Pedro', tipo: 'compra', quantidade: 67, ativo: 'GOGL34' },
]

let quantidadeDeOrdens = 0
for (let i = 0; i < ordens.length; i++) {
    quantidadeDeOrdens += ordens[i].quantidade
}


console.log(quantidadeDeOrdens)


let quantidadeDeOrdens2 = ordens.reduce(function(total, ordem) {
    return total + ordem.quantidade
}, 0)


console.log(quantidadeDeOrdens2)


let quantidadeDeOrdens3 = ordens.reduce((total, ordem) => total + ordem.quantidade, 0)


console.log(quantidadeDeOrdens3)