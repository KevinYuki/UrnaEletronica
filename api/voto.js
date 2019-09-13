const bcrypt = require('bcrypt')

module.exports = app => {

    const encryptVote = vote => {
        const salt = bcrypt.genSalt(10)
        return bcrypt.hashSync(vote, salt)
    }

    const save = async (req, res) => {
        const candidato = app.db('candidato')
            .select('*')
            .where({ num_candidato : req.body.num_candidato})
        
        const eleitor = app.db('eleitor')
            .select('*')
            .where({ id: req.body.id })

        if(eleitor.votou == 0) {

            const hash = encryptVote(candidato.num_candidato + eleitor.id)

            const rehash = encryptVote(hash)

            const voto = {num_candidato : candidato.num_candidato, hash : hash, rehash : rehash}

            app.db('voto')
                .insert(voto)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            res.status(400).send("Unexpected vote")
        }
    }

    return { save }
}