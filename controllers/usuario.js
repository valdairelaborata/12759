

var jwt = require('jsonwebtoken')



exports.login = (req, res) => {


    console.log(req.body)

    /*Consultar se usuáro existe no banco
    Se existir, gerar o token
    */
    
    var token = jwt.sign({ id: req.body.login }, '12759', { expiresIn: '1m' });

    return res.status(200).send(token);
}