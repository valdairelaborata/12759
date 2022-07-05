
var express = require('express')
var router = express.Router()

var controller = require('../controllers/usuario')

router.post('/login', controller.login)

module.exports = router
