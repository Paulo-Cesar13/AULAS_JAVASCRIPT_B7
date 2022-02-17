let dia = 8;
let diaNome = "";

switch (dia) {
    case 1:
        diaNome = "Domingo, vaamos descançar para começar bem a semana!!";
        break;
    case 2:
        diaNome = "Segunda-Feira";
        break;
    case 3:
        diaNome = "Terça-Feira";
        break;
    case 4:
        diaNome = "Quarta-Feira";
        break;
    case 5:
        diaNome = "Quinta-Feira";
        break;
    case 6:
        diaNome = "Sextol";
        break;
    case 7:
        diaNome = "Sabado, ta começando o final de semana!!";
        break;
    default:
        diaNome = "Código Invalido!!"

}

document.getElementById('dia').innerHTML ="Hoje é: "+diaNome;