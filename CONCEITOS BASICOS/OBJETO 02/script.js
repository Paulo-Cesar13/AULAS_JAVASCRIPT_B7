let carro = {
    fabricante: 'ferrari',
    modelo: 'Aventator/flex',
    ano: '2020/2021',
    cor: 'vermelha',
    ligado: 'false',
    ligar: function() {
        this.ligado == true;
        document.write('vrum vrum');
    },
    acelerar: function() {
        if(this.ligado == true) {
            alert('Ram nam nam');
        }
    }
}
document.write("Fabricante: "+carro.fabricante);
document.write("Modelo: "+carro.modelo);
document.write("Ano: "+carro.ano);
document.write("Cor: "+carro.cor);

carro.ligar();
carro.acelerar();