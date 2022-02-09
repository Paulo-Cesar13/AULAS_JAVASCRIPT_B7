function trocarAtributo(filename, animalname) {
    document.querySelector('.imagem').setAttribute('src', 'IMGS/'+filename);
    document.querySelector('imagem').setAttribute('alt', animalname);
}