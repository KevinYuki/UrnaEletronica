const bcrypt = require('bcrypt')

module.exports = app => {
    
    const encryptPassword = password => {
        const salt = bcrypt.genSalt(10)
        return bcrypt.hashSync(password, salt)
    }

    const save = async(req, res) => {
        const admin = { ...req.body }

        const table = await app.db('admin').first()

        if(table.id) return res.status(403).send(err)

        admin.password = encryptPassword(admin.password)

        app.db('admin')
            .insert(admin)
            .then(_ => res.status(201).send())
            .catch(err => res.status(500).send(err))
    }

    return { save }
}