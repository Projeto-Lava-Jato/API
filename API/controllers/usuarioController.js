const database = require('../models/index.js')

class usuarioController {
    static async pegaTodosOsUsuarios(req, res) {
        try {
            const todosOsUsuarios = await database.Usuarios.findAll()
            return res.status(200).json(todosOsUsuarios)
        }
        catch (error) {
            console.log("ERRO AO BUSCAR TODOS OS USUÁRIOS")
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmUsuario(req, res) {
        const { id } = req.params
        try {
            const umUsuario = await database.Usuarios.findOne({
                where: {
                    id: Number(id) 
                }})
            return res.status(200).json(umUsuario)    
        }
        catch(error) {
            console.log("ERRO AO TENTAR BUSCAR UM USUÁRIO")
            return res.status(500).json(error.message)
        }
    }

    static async criaUsuario(req, res) {
        const novoUsuario = req.body
        try {
            const novoUsuarioCriado = await database.Usuarios.create(novoUsuario)
            return res.status(200).json(novoUsuarioCriado)
        }
        catch(error) {
            console.log("ERRO AO CRIAR NOVO USUÁRIO")
            return res.status(500).json(error.message)
        }
    }

    static async atualizaUsuario(req, res) {
        const { id } = req.params
        const novasInfos = req.body
        try {
            await database.Usuarios.update(novasInfos, { where: { id: Number(id) } } )
            const usuarioAtualizado = await database.Usuarios.findOne({ where: { id: Number(id) } } )
            return res.status(200).json(usuarioAtualizado)
        }
        catch(error) {
            console.log("ERRO AO ATUALIZAR USUÁRIO")
            return res.status(500).json(error.message)
        }
    }

    static async removeUsuario(req, res) {
        const { id } = req.params
        try {
            await database.Usuarios.destroy({ where: { id: Number(id) } } )
            return res.status(200).json({ mensagem: `ID ${id} deletado.` })
        }
        catch(error) {
            return res.status(500).json(error.message)
        }
    }
}


module.exports = usuarioController