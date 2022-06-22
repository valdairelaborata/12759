const express = require('express')
const app = express()



app.get('/', function (req, res) {
    res.send('Opa! Passou pelo get!!!')
})

app.get('/produtos', function (req, res) {
    res.send('Tudo ok para a lista de produtos!!!')
})

app.post('/produtos', function (req, res) {
    res.send('Tudo ok para incluir um produto!!!')
})

app.put('/produtos', function (req, res) {
    res.send('Tudo ok para alterar um produto!!!')
})

app.delete('/produtos', function (req, res) {
    res.send('Tudo ok para excluir um produto!!!')
})




app.listen(3000)