// models/cliente.js
const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

const Cliente = mongoose.model('Cliente', clienteSchema);

module.exports = Cliente;
