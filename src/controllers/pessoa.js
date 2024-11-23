const Servicecliente = require('../services/cliente')
const ServiceFilme = require('../services/Filme')

// Criando a classe controller da cliente
class Controllercliente {
    async GetSession(req, res) {
        try {
            const id = req.session.id
            const cliente = await Servicecliente.GetclienteById(id)
            res.send({ msg: cliente })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
    async Getclientes(req, res) {
        try {
            const clientes = await Servicecliente.Getclientes()
            res.send({ msg: clientes })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
    async Createcliente(req,res){
        try {
            const { name, password, email } = req.body

            const cliente = await Servicecliente
                .Createcliente(name, password, email)
            res.send({ msg: cliente })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
    async Updatecliente(req,res){
        try {
            const id = req.params.id
            const name = req.body.name
            const password = req.body.password
            const email = req.body.email

            const cliente = await Servicecliente
                .Updatecliente(id, name, password, email)

            res.send({ msg: cliente })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
    async Deletecliente(req,res){
        try {
            const id = req.params.id
            await Servicecliente.Deletecliente(id)
            res.status(204).send()
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }

    async Login(req, res) {
        try {
            const { email, password } = req.body
            const token = await Servicecliente.Login(email, password)
            res.status(200).send({ token })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
}
class Controllerfilme {
    async GetSession(req, res) {
        try {
            const id = req.session.id
            const Filme = await ServiceFilme.GetfilmeById(id)
            res.send({ msg: Filme })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
    async Getfilmes(req, res) {
        try {
            const Filmes = await ServiceFilme.Getfilmes()
            res.send({ msg: Filmes })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
    async CreateFilme(req,res){
        try {
            const { name, password, email } = req.body

            const Filme = await ServiceFilme
                .CreateFilme(name, password, email)
            res.send({ msg: Filme })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
    async UpdateFilme(req,res){
        try {
            const id = req.params.id
            const name = req.body.name
            const password = req.body.password
            const email = req.body.email

            const Filme = await ServiceFilme
                .UpdateFilme(id, name, password, email)

            res.send({ msg: Filme })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
    async DeleteFilme(req,res){
        try {
            const id = req.params.id
            await ServiceFilme.DeleteFilme(id)
            res.status(204).send()
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }

    async Login(req, res) {
        try {
            const { email, password } = req.body
            const token = await ServiceFilme.Login(email, password)
            res.status(200).send({ token })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
}
module.exports = new ControllerFilme()