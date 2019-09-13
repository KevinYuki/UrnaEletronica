const bcrypt = require('bcrypt')

module.exports = app => {

    const get = (req, res) => {
        const votos = app.db('votos')
        
        res.json(votos)
    }
    
    return { get }

}