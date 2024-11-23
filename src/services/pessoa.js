const Modelcliente = require('../models/cliente')
const ModelFilme = require('../models/Filme')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const SALT = 12

class Servicecliente {
    async GetclienteById(id) {
        return Modelcliente.findByPk(id)
    }
    async Getclientes() {
        return Modelcliente.findAll()
    }
    async Createcliente(name, password, email) {
        if(!name || !password || !email){
            throw new Error("Favor preencher todos os dados!")
        }
        const hashSenha = await bcrypt.hash(password, SALT)
        return Modelcliente.create({ name, password: hashSenha, email })
    }
    async Updatecliente(id, name, password, email) {
        if(!id) {
            throw new Error("Favor informar o Id")
        }
        const cliente = await Modelcliente.findByPk(id)
        if(!cliente) {
            throw new Error("cliente não encontrada")
        }
        cliente.name = name || cliente.name
        cliente.password = password
            ? await bcrypt.hash(password, SALT)
            : cliente.password
        cliente.email = email || cliente.email

        cliente.save()
        return cliente
        // if(!name || !password || !email){
        //     throw new Error("Favor preencher todos os dados!")
        // }
        // return Modelcliente.update(
        //     { name, password, email },
        //     { where: { id } }
        // )
    }
    async Deletecliente(id) {
        if(!id) {
            throw new Error("Favor informar o Id")
        }
        const cliente = await Modelcliente.findByPk(id)
        if(!cliente) {
            throw new Error("cliente não encontrada")
        }
        return cliente.destroy()
        // return Modelcliente.destroy({ where: { id } })
    }

    async Login(email, password) {
        if(!email || !password) {
            throw new Error("Email ou senha inválido!")
        }

        const cliente = await Modelcliente.findOne({ where: { email } })

        if(!cliente) {
            throw new Error("Email ou senha inválido!")
        }

        const senhaValida = bcrypt.compare(password, cliente.password )

        if(!senhaValida) {
            throw new Error("Email ou senha inválido!")
        }

        return jwt.sign({ id: cliente.id }, 'segredo', { expiresIn: 60 * 60 })
    }
}
class ServiceFilme {
    async GetFilmeById(id) {
        return ModelFilme.findByPk(id)
    }
    async GetFilmes() {
        return ModelFilme.findAll()
    }
    async CreateFilme(name) {
        if(!name ){
            throw new Error("Favor preencher o nome!")
        }
            return ModelFilme.create({ name,})
    }
    async UpdateFilme(name,) {
        if(!Filme) {
            throw new Error("Filme não encontrada")
        }
        Filme.name = name || Filme.name
        Filme.save()
        return Filme
       
    }
    async DeleteFilme(id) {
        if(!id) {
            throw new Error("Favor informar o Id")
        }
        const Filme = await ModelFilme.findByPk(id)
        if(!Filme) {
            throw new Error("Filme não encontrada")
        }
        return Filme.destroy()
        // return ModelFilme.destroy({ where: { id } })
    }

}
module.exports = new Servicecliente()
module.exports = new ServiceFilme()