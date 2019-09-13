const { authSecret } = require('../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt')

module.exports = app => {
    const signin = async (req, res) => {
        if(!req.body.username || !req.body.password) {
            return res.status(400).send('Informe usuário e senha!')
        }

        const admin = await app.db('admin')
            .where({username: req.body.username})
            .first()

        if(!admin) return res.status(400).send('Administrador não encontrado!')

        const isMatch = bcrypt.compareSync(req.body.password, admin.password)
        if(!isMatch) return res.status(401).send('Email/Senha inválidos!')

        const payload = {
            id: admin.id,
            username: admin.username
        }

        res.json({
            ...payload,
            token: jwt.encode(payload, authSecret)
        })
    }

    return { signin }
}