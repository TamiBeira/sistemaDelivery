const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const slugify = require('slugify')


const port = 3030;

const Produtos = require('./Produtos');

const app = express();
app.use(cors()); //Não dar erro do back e front
app.use(express.json()); //conseguir imprimir os dados em JSON

//Ambiente conexão banco de dados
mongoose.connect('mongodb://localhost:27017/delivery', {useNewUrlParser: true, useUnifiedTopology: true}).then((conn =>{
    console.log('Conectado ao banco de dados!');
})).catch(err =>{
    console.log('Erro na conexão com banco de dados!');
});

//START ROTAS
//ROTA INICIAL
app.get('/', (req, res)=>{
    Produtos.find().then(produtos=>{
      res.statusCode = 200;
      res.json(produtos);  
    }).catch(err=>{
        res.statusCode = 500;
        res.json({err:err});
    })
})

//ROTA CADASTRO
app.post('/cadastro-produto', (req,res)=>{
    let sabor = req.body.sabor;
    let descricao = req.body.descricao;
    let tipo = req.body.tipo;
    let valor = req.body.valor;
    let imagem = req.body.imagem;
    let slug = slugify(sabor); //cria slug do sabor


//Salvar no banco de dados
const produtos = new Produtos({
    sabor,
    descricao,
    tipo,
    valor,
    imagem,
    slug
})
produtos.save().then(()=>{
    res.statusCode = 200;
    res.json({msg: 'Cadastro realizado com sucesso!'});
}).catch(err=>{
    res.statusCode = 500;
    res.json({err:err});
})
})

//ROTA EDITAR PRODUTO
app.patch('/editar-produto/:id', (req, res)=>{
    let id = req.params.id;
    Produtos.updateOne({'_id':id},req.body).then(editar =>{
        res.json({msg: 'Produto editado com sucesso!'});
    }).catch(err =>{
        res.statusCode = 500;
        res.json({err: err});
    })
})

//ROTA DELETAR PRODUTO
app.delete('/deletar-produto/:id', (req,res)=>{
    let id = req.params.id;
    Produtos.deleteOne({'_id':id}).then(deletar=>{
        if(id != undefined){
            res.statusCode = 200;
            res.json({msg: 'Produto deletado com sucesso!'});
        }else{
            res.json({msg: 'Produto não localizado no banco de dados!'});
        }
    }).catch(err=>{
        res.statusCode = 500;
        res.json({err:err});
    })
})

//ROTA DETALHE PRODUTO
app.get('/detalhe/:id',(req, res)=>{
    let id = req.params.id;
    Produtos.findOne({'_id':id}).then(id=>{
        if(id != undefined){
            res.statusCode = 200;
            res.json(id);
        }else{
            res.json({msg: 'Produto não localizado no banco de dados!'});
        }
    }).catch(err=>{
        res.statusCode = 500;
        res.json({err: err});
    })
})

//STOP ROTAS






//Servidor
app.listen(port, (err)=>{
    if(err)throw err;
    console.log(`Sistema está rodando na porta: http://localhost:${port}`);
})
