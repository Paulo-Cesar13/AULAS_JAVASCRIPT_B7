// variaveis de controle de intrface
let seuVotoPara = document.querySelector('.b-1-1 span');
let cargo = document.querySelector('.b-1-2 span');
let descricao = document.querySelector('.b-1-4');
let aviso = document.querySelector('.b-2');
let lateral = document.querySelector('.b-1-right');
let numero = document.querySelector('.b-1-3');
// variaveis de controle de intrface

//variaveis de ambiente

let etapaAtual = 0;
let numero ='';

function comecarEtapa() {
    let etapa = etapas[etapaAtual];
    let numeroHtml = '';

    for( let i = 0; i < etapa.numeros; i++) {
        numeroHtml += '<div class="numero pisca"></div>';
        
    }

    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numero.innerHTML = numeroHtml;
};

function atualizaInterface() {

}

//variaveis de ambiente

//funções de controle
function clicou(n) {
//let elNumero = document.querySelector('.numero.piscou');
    //if(elNumero !== null) {
       // elNumero.innerHTML = n;
       // numero = `${numero}${n}`;
    //}
};
clicou();
function branco() {
   
};

function corrigir() {
    
};

function confirmar() {
    
};

branco();
corrigir();
confirmar();

//funções de controle
comecarEtapa();
