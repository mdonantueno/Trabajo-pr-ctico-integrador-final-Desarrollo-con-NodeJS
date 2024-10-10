// models/insumo.js
const mongoose = require('mongoose');

const insumoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    cantidad: {
        type: Number,
        required: true
    },
    costo: {
        type: Number,
        required: true
    },
    proveedor: {
        type: String,
        required: true
    }
});

const Insumo = mongoose.model('Insumo', insumoSchema);

module.exports = Insumo;
