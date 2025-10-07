let usuario = {
    nome: 'Matheus',
    excluir: function() {
        console.log('O usuário,' + this.nome + ', foi excluído.');
    },
}

usuario.excluir();
