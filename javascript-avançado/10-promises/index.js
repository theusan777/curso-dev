// new Promise ((resolve, reject) => {
    
// }) 

let chaleiraEstaNoFogao = true;
let fogaoEstaLigado = true;

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

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
console.log('fazendo Cafe')