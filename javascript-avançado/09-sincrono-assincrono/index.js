function colocarAguaPraFerver() {
    console.log('Colocar a água para ferver');
    setTimeout(() => {
        console.log('Água fervida');
        passarOCafe()
    }, 5000);
}

function prepararPraPassarOCafe() {
    console.log('Pegar o pó do café');
    console.log('Pegar o filtro');
    console.log('Colocar o pó do café no filtro');
    console.log('Colocar a água fervida no café');
}

function passarOCafe() {
    console.log('Passar o café');
}


prepararPraPassarOCafe()
passarOCafe()