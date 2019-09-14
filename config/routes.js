const admin = require('./admin')

module.exports = app => {
    app.post('/insertadmin', app.api.administrador.save)
    app.post('/signin', app.api.auth.signin)
    
    app.route('/auditoria')
        .all(app.config.passport.authenticate())
        .get(admin(app.api.auditoria.get))

    app.route('/votos')
        .all(app.config.passport.authenticate())
        .get(admin(app.api.voto.save))
    
    app.route('/eleitores')
        .all(app.config.passport.authenticate())
        .post(admin(app.api.eleitor.save))
        .get(admin(app.api.eleitor.get))

    app.route('/eleitores/:id')
        .all(app.config.passport.authenticate())
        .put(admin(app.api.eleitor.save))
        .get(admin(app.api.eleitor.getById))
        .delete(admin(app.api.eleitor.remove))
        
    app.route('/candidatos')
        .all(app.config.passport.authenticate())
        .post(admin(app.api.candidato.save))
        .get(admin(app.api.candidato.get))

    app.route('/candidatos/:id')
        .all(app.config.passport.authenticate())
        .put(admin(app.api.candidato.save))
        .get(admin(app.api.candidato.getById))
        .delete(admin(app.api.candidato.remove))

}