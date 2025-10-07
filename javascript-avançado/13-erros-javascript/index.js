let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
    return new Promise ((resolve, reject) => {

        if (typeof chaleiraEstaNoFogao !== 'boolean' || typeof fogaoEstaLigado !== 'boolean') {
            reject('Os parâmetros devem ser booleanos')
            return
        }

        if (chaleiraEstaNoFogao && fogaoEstaLigado) {  
            console.log('A água está fervendo')
            resolve()
        } else {
            const erro = 'Coloque a chaleira no fogão e ligue o fogão'
            reject(erro)  
        }
    });
}


async function iniciarProcessoDeFazerCafe() {
    try {
        await ferverAgua(chaleiraEstaNoFogo, fogaoEstaLigado)
        passarCafe()
        console.log('fazendo Cafe')
        
        throw new Error('Erro inesperado')

    } catch(erro) {
        console.log('Ocorreu um erro: ', erro)
    } finally {
        console.log('Sempre executa')
    }
}

console.log('Iniciando o processo de fazer café')
iniciarProcessoDeFazerCafe()
console.log('Terminou de iniciar o processo de fazer café')

let chaleiraEstaNoFogao = true; 
let fogaoEstaLigado = false;
let cafePassado = false;
let cafeTomado = false;
let copoEstaNaMao = false;

function passarCafe() {
    if (!cafePassado) {
        console.log('Café passado')
        cafePassado = true
    }
    return
}

function tomarCafe() {
    if (cafePassado && copoEstaNaMao && !cafeTomado) {
        console.log('Café tomado')
        cafeTomado = true
        return
    }   
    console.log('Não é possível tomar café')
    return
}   

