function alterarCorDeFundoPrimeiroPost() {
  let post = document.getElementsByClassName("post");

  let primeiroPost = post[0];
  console.log('primeiroPost', primeiroPost);  
  primeiroPost.style.backgroundColor = "lightblue";

}

function aumentarFonteSegundoPost() {
  let textoPosts = document.getElementsByClassName('texto-post');
  console.log(textoPosts[1].classList)

  textoPosts[1].classList.add('font-grande');
  

}

function marcarRadio(genero) {
    let radioMasculino = document.getElementById('genero-masculino');

    let radioFeminino = document.getElementById('genero-feminino');

    if (genero === 'M') {
        radioMasculino.checked = true;
    }else if (genero === 'F') {
        radioFeminino.checked = true;
    }
}