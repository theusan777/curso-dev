let frutas = [ 'Banana', 'Maçã', 'Uva', 'Pera' ];
let frutasTamanho = frutas.length;

console.log (frutasTamanho);

for (let i = 0; i < frutasTamanho; i++) {
    console.log(frutas[i]);
}

// frutas.forEach(function(item) {
//     console.log('Fruta: ' item);
// }

// frutas.push('Laranja'); // Adiciona 'Laranja' ao final do array 
// console.log(frutas);

// frutas.pop(); // Remove o último item do array
// console.log(frutas);

// frutas.shift(); // Remove o primeiro item do array
// console.log(frutas);    

// frutas.unshift('Abacaxi'); // Adiciona 'Abacaxi' ao início do array
// console.log(frutas);    

// frutas.splice(1, 2); // Remove 2 itens a partir do índice 1
// console.log(frutas);

// frutas.splice(1, 0, 'Manga', 'Kiwi'); // Adiciona 'Manga' e 'Kiwi' no índice 1
// console.log(frutas);    

// frutas.sort(); // Ordena o array em ordem alfabética
// console.log(frutas);   