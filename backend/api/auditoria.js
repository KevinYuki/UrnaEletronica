const bcrypt = require('bcrypt')

module.exports = app => {

    const get = async (req, res) => {
        const votos = await app.db.select('*').from('voto')
        const retorno = {
            candidato1: 0,
            candidato2: 0,
            branco: 0,
            nulo: 0,
            invalido: 0,
            votosInvalidos: []

        }

        votos.forEach(voto => {
            const valid = bcrypt.compareSync(voto.hash, voto.rehash)

            if(valid) {
                switch(voto.num_candidato) {
                    case 10:
                        retorno.candidato1 += 1
                        break
                    case 20:
                        retorno.candidato2 += 1
                        break
                    case 99:
                        retorno.branco += 1
                        break
                    default:
                        retorno.nulo += 1
                        break
                }
            } else {
                retorno.invalido += 1
                retorno.votosInvalidos.push({num_candidato: voto.num_candidato, hash: voto.hash })
            }
        })
        res.status(200).json(retorno)
    }
    
    return { get }

}