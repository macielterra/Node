const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 2499.15,
    desc: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo Salvo!')
})