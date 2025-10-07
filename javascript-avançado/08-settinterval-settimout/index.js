setTimeout(() => {
    alert('Olá Mundo!');
}, 2000);


setInterval(() => {
    console.log('executando a cada 2 segundos');
}, 2000);


const idDoIntervalo = setInterval(() => {
    console.log('executando a cada 3 segundos');
}, 3000);

clearInterval(idDoIntervalo);