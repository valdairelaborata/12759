var express = require('express')
var router = express.Router()


var controller = require('../controllers/produtos')


router.post('/', controller.incluir)
router.get('/', controller.listar)



module.exports = router