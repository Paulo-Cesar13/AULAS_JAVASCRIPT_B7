function preto() {
    limpar();
    document.getElementById("titulo").classList.add('preto');
}

function vermelho() {
    limpar();
    document.getElementById("titulo").classList.add('vermelho');
}

function branco() {
    limpar();
    document.getElementById("titulo").classList.add('branco');
}

function limpar() {
    document.getElementById("titulo").classList.remove('preto');
    document.getElementById("titulo").classList.remove('vermelho');
    document.getElementById("titulo").classList.remove('branco');
}