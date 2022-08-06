const { Router } = require('express')
const usuarioController = require('../controllers/usuarioController')

const router = Router()

router.get('/usuarios', usuarioController.pegaTodosOsUsuarios)
router.get('/usuarios/:id', usuarioController.pegaUmUsuario)
router.post('/usuarios', usuarioController.criaUsuario)
router.put('/usuarios/:id', usuarioController.atualizaUsuario)
router.delete('/usuarios/:id', usuarioController.removeUsuario)

module.exports = router