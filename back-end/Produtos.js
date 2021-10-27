const mongoose = require('mongoose');

const Produtos = mongoose.model('Produtos', 
{ 
    sabor: String,
    descricao: String,
    tipo: String,
    valor: Number,
    imagem: String,
    slug: String
});

module.exports = Produtos;