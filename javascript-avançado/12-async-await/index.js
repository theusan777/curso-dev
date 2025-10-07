async function ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado) {
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

await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
passarCafe()
console.log('fazendo Cafe') 
// await só pode ser usado dentro de uma função async