const port = 3200;

const bodyparser = require('body-parser');
const express = require('express');
const cors = require('./cors');

const server = express();

server.use(bodyparser.urlencoded({ extended: true }));
server.use(bodyparser.json());
server.use(cors);

server.listen(port, () => console.log(`Servidor no ar na porta: ${port}`))

module.exports = server;
