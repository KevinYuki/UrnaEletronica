module.exports = app => {
    const save = async (req, res) => {
        const eleitor = { ...req.body }
        if(req.params.id) eleitor.id = req.params.id

        if(eleitor.id) {
            app.db('eleitor')
                .update(eleitor)
                .where({id: eleitor.id})
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('eleitor')
                .insert(eleitor)
                .then(_ => res.status(201).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const getById = (req, res) => {
        app.db('eleitor')
            .select('*')
            .where({ id: req.params.id })
            .then(eleitor => res.json(eleitor))
            .catch(err => res.status(500).send(err))
    }

    const get = (req, res) => {
        app.db('eleitor')
            .select('*')
            .then(eleitores => res.json(eleitores))
            .catch(err => res.status(500).send(err))
    }

    const remove = async (req, res) => {
        try{
            const rowsUpdated = await app.db('eleitor')
                .where({id : req.params.id})
            res.status(204).send()
        }
        catch(msg){
            res.status(400).send(msg)
        }
    }

    return {save, getById, get ,remove}
}