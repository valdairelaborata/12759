

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