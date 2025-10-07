
let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
    return new Promise ((resolve, reject) => {
        if (chaleiraEstaNoFogao && fogaoEstaLigado) {
            console.log('A água está fervendo')
            resolve()
        } else {
            console.log('A água não ferveu')
            reject()  
        }  
    });
}

let chaleiraEstaNoFogao = true;
let fogaoEstaLigado = true;

let passarCafe = () => console.log('Passando o café...')

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado).then(passarCafe)
console.log('fazendo Cafe')