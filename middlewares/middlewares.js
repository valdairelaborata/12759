


exports.request = (req, res, next) => {

    console.log('Resquest => ', req.method, req.url, req.body);

    next()
}

exports.autenticacao = (req, res, next) => {

    var token = req.headers.auth;

    return res.status(500).send(token);
}