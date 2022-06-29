const express = require('express')
const fs = require('fs')
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://user001:123@cluster0.uqa1irq.mongodb.net/?retryWrites=true&w=majority')


const app = express()

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger_output.json');

app.use(express.json())

app.use('/arquivos', express.static('public'))


app.get('/', function (req, res) {
    // #swagger.tags = ['Root']   
    // #swagger.description = 'Root'
    res.send('Opa! Passou pelo get!!!')
})

//CRUD
app.get('/produtos', function (req, res) {
    // #swagger.tags = ['Produtos']   
    // #swagger.description = 'Buscar produtos'
    res.status(200).send(listarProdutos())
})

app.get('/produtos/:codigo', function (req, res) {
    // #swagger.tags = ['Produtos']   
    // #swagger.description = 'Buscar produto pelo código'

    var produto = listarProdutos().find(x => x.codigo == req.params.codigo)
    res.status(200).send(produto)
})

app.post('/produtos', function (req, res) {
    // #swagger.tags = ['Produtos']   
    // #swagger.description = 'Incluir um produto'

    var produtos = listarProdutos()
    var produto = req.body
    produtos.push(produto)

    gerenciarProdutos(produtos)

    res.status(201).send('Registro do produto ' + req.body.nome + ' incluído com sucesso!!!')
})

app.put('/produtos/:codigo', function (req, res) {
    // #swagger.tags = ['Produtos']   
    // #swagger.description = 'Alterar um produto'

    var produtos = listarProdutos()
    var produto = req.body

    if (req.body.codigo !== req.params.codigo) {
        res.status(406).send('Não é possível alterar um produto com o código !== !!!')
    }

    var produtosExistentes = produtos.filter(x => x.codigo != req.params.codigo)
    produtosExistentes.push(produto)

    gerenciarProdutos(produtosExistentes)

    res.status(200).send('Produto ' + req.body.nome + ' alterado com sucesso!!!')
})

app.delete('/produtos/:codigo', function (req, res) {
    // #swagger.tags = ['Produtos']   
    // #swagger.description = 'Excluir um produto'


    var produtos = listarProdutos()
    var produtosExistentes = produtos.filter(x => x.codigo != req.params.codigo)

    gerenciarProdutos(produtosExistentes)

    res.status(202).send('Produto ' + req.params.codigo + ' excluído com sucesso!!!')
})

app.delete('/categorias/:codigo', function (req, res) {
    // #swagger.tags = ['Categorias']   
    // #swagger.description = 'Buscar categorias'
    res.send('Tudo ok para excluir o produto ' + req.params.codigo + '!!!')
})


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const gerenciarProdutos = (data) => {

    var dadosJson = JSON.stringify(data)
    fs.writeFileSync('produtos.json', dadosJson)
}


const listarProdutos = () => {

    var produtos = fs.readFileSync('produtos.json')
    //console.log(produtos)

    return JSON.parse(produtos)
}

app.listen(3000)