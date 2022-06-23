const express = require('express')
const app = express()

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger_output.json');

app.use(express.json())

app.get('/', function (req, res) {
    res.send('Opa! Passou pelo get!!!')
})

//CRUD
app.get('/produtos', function (req, res) {
    console.log(req.query)
    res.send('Tudo ok para a lista de produtos!!!' + req.query.codigo)
})

app.get('/produtos/:codigo', function (req, res) {
    res.send('Tudo ok para a busca de produto!!!' + req.params.codigo)
})

app.post('/produtos', function (req, res) {
    console.log(req.body)
    res.status(201).send('Registro do produto ' + req.body.nome + ' ok!!!')
})

app.put('/produtos/:codigo', function (req, res) {
    console.log(req.body)
    res.send('Tudo ok para alterar um produto ' + req.body.nome + '!!!')
})

app.delete('/produtos/:codigo', function (req, res) {
    res.send('Tudo ok para excluir o produto ' + req.params.codigo + '!!!')
})


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000)