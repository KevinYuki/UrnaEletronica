const bcrypt = require('bcrypt')
const buzzer = require('../config/buzzer.js')
module.exports = app => {

    const encryptVote = vote => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(vote, salt)
    }

    const save = async (req, res) => {
        const candidato = await app.db.select('*').from('candidato')
            .where({ num_candidato: req.body.num_candidato }).first()

        const eleitor = await app.db.select('*').from('eleitor').first()
            .where({ id: req.body.id })

        let voto = {}

        if(eleitor && eleitor.votou === 0) {
           
            await app.db('eleitor')
            .where({ id: eleitor.id })
            .update('votou', 1)

            if(candidato) {
                const hash = encryptVote(candidato.num_candidato + eleitor.cpf)
                const rehash = encryptVote(hash)

                voto = {num_candidato : candidato.num_candidato, hash : hash, rehash : rehash}
            } else {
                const hash = encryptVote("1" + eleitor.cpf)
                const rehash = encryptVote(hash)
                
                voto = {num_candidato : 1, hash : hash, rehash : rehash}
            }

            await app.db('voto')
                .insert(voto)
                .then(_ => { 
                    buzzer()
                    res.status(204).send()
                    }
                )
                .catch(err => res.status(500).send(err))
        } else {
            res.status(400).send("Unexpected vote")
        }
    }

    return { save }
}
