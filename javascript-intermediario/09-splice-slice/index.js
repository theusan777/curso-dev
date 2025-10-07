// let frutas = [ 'Banana', 'Maçã', 'Uva', 'Pera' ];

// let frutasExtraidas = frutas.slice(1, 3); // Extrai do índice 1 ao 2 (não inclui o 3)
// console.log(frutasExtraidas); // ['Maçã', 'Uva']


let frutas = [ 'Banana', 'Maçã', 'Uva', 'Pera' ];

let removeEAdiciona = frutas.splice(1, 0, 'Manga', 'Kiwi'); // Remove 0 itens a partir do índice 1 e adiciona 'Manga' e 'Kiwi'
console.log(frutas);
