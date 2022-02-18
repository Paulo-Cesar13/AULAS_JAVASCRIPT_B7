let html = '';

let c = 0;

while ( c <= 10) {
    html += "Número agorra é: "+ c + "<br>";
    c++;
}

document.getElementById('cont').innerHTML = html;