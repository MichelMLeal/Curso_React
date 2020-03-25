const nodeRestful = require('node-restful');
const mongoose = nodeRestful.mongoose;

const modelo = new mongoose.Schema({
    codigo: { type: Number, required: true },
    descricao: { type: String, required: true },
    cargaHoraria: { type: Number, required: true, min: 4, max: 2000 },
    preco: { type: Number, required: true },
    categoria: {
        type: String, uppercase: true,
        enum: ['INFORMATICA', 'REDES', 'ADMINISTRACAO', 'ENGENHARIA']
    }
});

module.exports = nodeRestful.model('cursos', modelo)