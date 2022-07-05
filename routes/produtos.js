var express = require('express')
var router = express.Router()


var controller = require('../controllers/produtos')


router.post('/', controller.incluir)
router.get('/', controller.listar)
router.get('/:codigo', controller.buscar)
router.put('/:codigo', controller.alterar)
router.delete('/:codigo', controller.excluir)


module.exports = router