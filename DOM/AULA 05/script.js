function trocar() {
    if(document.querySelector('#cor').classList.contains('preto')) {
        document.querySelector('#cor').classList.remove('preto');
        document.querySelector('#cor').classList.add('vermelho');
    } else {
        document.querySelector('#cor').classList.remove('vermelho');
        document.querySelector('#cor').classList.add('preto');
    }
}