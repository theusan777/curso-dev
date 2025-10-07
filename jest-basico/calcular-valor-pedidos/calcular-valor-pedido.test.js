const calcularValorPedido = require('./calcular-valor-pedido');

it ('deve retornar 170 quando o valor dos produtos for 130 e o valor da entrega for 40', () => {
    const meuPedido = {
     itens: [
        { nome: 'Camiseta', valor: 200 },
        { nome: 'Calça', valor: 300 },
        { nome: 'Entrega', valor: 40, entrega: true }
    ]
  }

  const resultado = calcularValorPedido(meuPedido);

  expect(resultado).toBe(540);
})

it ('deve cobrar o valor da entrega quando o valor dos produtos for menor que 500', () => {
    const meuPedido = {
     itens: [
        { nome: 'Camiseta', valor: 50 },
        { nome: 'Calça', valor: 80 },
        { nome: 'Entrega', valor: 40, entrega: true }
    ]
  }
  const resultado = calcularValorPedido(meuPedido);

  expect(resultado).toBe(170);
})


 it('deve adicionar um acrescimo de 20% no valor da entrega do pedido caso o estado seja RS', () => {
    const pedidoComEstadoRS = {
      estado: 'RS',
     itens: [
        { nome: 'Camiseta', valor: 500 },
        { nome: 'Entrega', valor:100, entrega: true }
    ]
  }
  const resultado = calcularValorPedido(pedidoComEstadoRS);
  expect(resultado).toBe(620);
 })
