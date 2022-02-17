var objeto = {x:1, y:2, z:3};

for(var prop in objeto) {
    console.log(objeto[prop]);
}





let carros = ['Ferrari','Porsh','Trovare','Mercedes'];

let html = '<ul>';

for( let i in carros) {
    html += '<li>'+ carros[i] +'</li>';
}

html += '</ul>';


document.getElementById("lista").innerHTML = html;


/*
let texto = "";

for( let i = 0; i < 10; i++) {
    texto = texto + i + '<br>';
}

document.getElementById("lista").innerHTML = texto;
*/