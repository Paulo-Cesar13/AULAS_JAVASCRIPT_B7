function digitou(e) {
    if (e.keyCode == 13) {
        let texto = document.getElementById("campo").value;

        document.write(texto);
    }
}