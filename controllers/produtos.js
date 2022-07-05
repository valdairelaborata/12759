

var Produtos = require('../models/produtos')

exports.incluir = (req, res) => {

    // #swagger.tags = ['Produtos']   
    // #swagger.description = 'Incluir um produto'

    console.log(req.body)

    Produtos.create(req.body, (err, data) => {
        if (!err) {
            res.status(201).send('Registro do produto ' + req.body.nome + ' incluído com sucesso!!!')
        }
        else {
            console.log(err)
            res.status(500).send('Ocorreu um problema ao tentar salvar o produto!!! Erro:' + err)
        }
    })
}

exports.listar = (req, res) => {
    // #swagger.tags = ['Produtos']   
    // #swagger.description = 'Buscar produtos'

    Produtos.find({}, (err, data) => {
        res.status(200).send(data)
    })
}

exports.buscar = (req, res) => {
    // #swagger.tags = ['Produtos']   
    // #swagger.description = 'Buscar produto pelo código'

    var codigo = req.params.codigo

    Produtos.findOne({ codigo }, (err, data) => {
        res.status(200).send(data)
    })
}

exports.alterar = (req, res) => {
    // #swagger.tags = ['Produtos']   
    // #swagger.description = 'Alterar um produto'

    var codigo = req.params.codigo

    Produtos.findOneAndUpdate({ codigo }, { $set: req.body }, (err, data) => {
        if (!err) {
            res.status(200).send('Produto ' + req.body.nome + ' alterado com sucesso!!!')
        }
        else {
            console.log(err)
            res.status(500).send('Ocorreu um problema ao tentar alterar o produto!!! Erro:')
        }
    })
}

exports.excluir = (req, res) => {
    // #swagger.tags = ['Produtos']   
    // #swagger.description = 'Excluir um produto'


    var codigo = req.params.codigo

    Produtos.findOneAndDelete({ codigo }, (err, data) => {
        if (!err) {
            res.status(202).send('Produto ' + req.params.codigo + ' excluído com sucesso!!!')
        }
        else {
            console.log(err)
            res.status(500).send('Ocorreu um problema ao tentar excluir o produto!!!')
        }
    })
}