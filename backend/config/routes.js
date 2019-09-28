// const admin = require('./admin')

module.exports = app => {
    app.post('/insertadmin', app.api.administrador.save)
    app.get('/infoadmin', app.api.administrador.infoAdmin)
    app.post('/signin', app.api.auth.signin)
    
    app.route('/auditoria')
        .all(app.config.passport.authenticate())
        .get(app.api.auditoria.get)

    app.route('/votos')
        .all(app.config.passport.authenticate())
        .post(app.api.voto.save)
    
    app.route('/eleitores')
        .all(app.config.passport.authenticate())
        .post(app.api.eleitor.save)
        .get(app.api.eleitor.get)

    app.route('/eleitores/:id')
        .all(app.config.passport.authenticate())
        .put(app.api.eleitor.save)
        .get(app.api.eleitor.getById)
        .delete(app.api.eleitor.remove)
        
    app.route('/candidatos')
        .all(app.config.passport.authenticate())
        .post(app.api.candidato.save)
        .get(app.api.candidato.get)

    app.route('/candidatos/:num_candidato')
        .all(app.config.passport.authenticate())
        .put(app.api.candidato.save)
        .get(app.api.candidato.getById)
        .delete(app.api.candidato.remove)

}