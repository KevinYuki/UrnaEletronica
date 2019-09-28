const bcrypt = require('bcrypt')

module.exports = app => {
    
    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }

    const save = async (req, res) => {
        const admin = { ...req.body }

        const table = await app.db('admin').first()

        if(table) return res.status(403).send("Admin já cadastrado")

        admin.password = encryptPassword(admin.password)

        app.db('admin')
            .insert(admin)
            .then(_ => res.status(201).send())
            .catch(err => res.status(500).send(err))
    }

    const infoAdmin = async (req, res) => {
        const table = await app.db('admin').select('username').first()
        if(table) return res.status(200).send(table)
        else return res.status(200).send("not_exists")
    }

    return { save, infoAdmin }
}