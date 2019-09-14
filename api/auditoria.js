const bcrypt = require('bcrypt')

module.exports = app => {

    const get = (req, res) => {
        app.db('voto')
            .then(votos => res.json(votos))
            .catch(err => res.status(500).send(err))
    }
    
    return { get }

}