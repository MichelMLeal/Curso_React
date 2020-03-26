const nodeRestful = require('node-restful');
const mongoose = nodeRestful.mongoose;

const modelo = new mongoose.Schema({
    data: { type: Date },
    nome: { type: String },
    email: { type: String },
    assunto: { type: String }
});

module.exports = nodeRestful.model('contato', modelo)