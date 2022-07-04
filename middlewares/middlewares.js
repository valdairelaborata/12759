
var jwt = require('jsonwebtoken')

exports.request = (req, res, next) => {

    console.log('Resquest => ', req.method, req.url, req.body);

    next()
}

exports.autenticacao = (req, res, next) => {

    var token = req.headers.auth;
    console.log(token)

    jwt.verify(token, '12759', (err, decoded) => {
        if (err) {
            console.log(err)
            return res.status(403).send('Acesso inválido!!!')
        }
        else {
            console.log(decoded)
            next()
        }
    })


    /*  return res.status(500).send(token);*/
}