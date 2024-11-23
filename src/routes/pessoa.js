const express = require('express')
const controllercliente = require('../controllers/cliente')
const ControllerFilme = require('../controllers/Filme')
const auth = require("../middleware/auth")

// Inicializando as rotas do express
const router = express.Router()

// Criando as rotas
router.post('/', controllercliente.Createcliente)
router.post('/login', controllercliente.Login)

router.get('/', auth, controllercliente.Getclientes)
router.get('/session', auth, controllercliente.GetSession)
router.put('/:id', auth, controllercliente.Updatecliente)
router.delete('/:id', auth, controllercliente.Deletecliente)


router.post('/', controllerFilme.CreateFilme)
router.post('/login', controllerFilme.Login)

router.get('/', auth, controllerFilme.GetFilmes)
router.get('/session', auth, controllerFilme.GetSession)
router.put('/:id', auth, controllerFilme.UpdateFilme)
router.delete('/:id', auth, controllerFilme.DeleteFilme)


// Exportar as rotas
module.exports = router