function Eletronicos(tipo) {
    this.tipo = tipo
    this.Marca = Marca
    this.Modelo = Modelo
    this.AnoDoAparelho = AnoDoAparelho
    this.AnoDeFabricacao = AnoDeFabricacao
    this.armazenamento =  armazenamento
    this.tamanho = tamanho

}


function Celular(tipo, Marca, Modelo , AnoDoAparelho, AnoDeFabricacao, armazenamento, tamanho) {
    Eletronicos.call(this, Marca, Modelo , AnoDoAparelho, AnoDeFabricacao, armazenamento, tamanho)
}

function Tablet(tipo, Marca, Modelo , AnoDoAparelho, AnoDeFabricacao, armazenamento, tamanho) {
    Eletronicos.call(this, tipo, Marca, Modelo , AnoDoAparelho, AnoDeFabricacao, armazenamento, tamanho)
}

const CelularDeGustavo = new Celular('celular', 'Apple', 'Iphone 13 pro', 2023, 2022, '128gb','7.7 polegadas')
const TabletDeJorge = new Tablet('Tablet', 'Multilaser', 'Kids Space Android', 2023, 2022, '34gb','10 polegadas')
console.log(CelularDeGustavo)
console.log(TabletDeJorge)

