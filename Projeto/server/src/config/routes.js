const express = require('express');

module.exports = server => {
    const router = express.Router();
    server.use('/api', router);

    const servicesCursos = require('../api/cursos/service');
    const servicesContatos = require('../api/contatos/service');
    const servicesCompromissos = require('../api/compromissos/service');
    servicesCursos.register(router, '/cursos');
    servicesContatos.register(router, '/contatos');
    servicesCompromissos.register(router, '/compromissos');
}