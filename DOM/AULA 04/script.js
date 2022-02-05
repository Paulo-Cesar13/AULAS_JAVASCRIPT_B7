function verde() {
    document.querySelector('#cor').classList.remove('vermelho');
    document.querySelector('#cor').classList.remove('azul');
    document.querySelector('#cor').classList.add('verde');
}

function vermelho() {
    document.querySelector('#cor').classList.remove('azul');
    document.querySelector('#cor').classList.remove('verde');
    document.querySelector('#cor').classList.add('vermelho');
}

function azul() {
    document.querySelector('#cor').classList.remove('vermelho');
    document.querySelector('#cor').classList.remove('verde');
    document.querySelector('#cor').classList.add('azul');
}