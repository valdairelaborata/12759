

var jwt = require('jsonwebtoken')



exports.login = (req, res) => {
    
    var token = jwt.sign({ id: 'teste' }, '12759', { expiresIn: '30m' });

    return res.status(200).send(token);
}