// models/reparacion.js

const mongoose = require('mongoose');

const reparacionSchema = new mongoose.Schema({
    descripcion: {
        type: String,
        required: true
    },
    costo: {
        type: Number,
        required: true
    },
    fecha: {
        type: Date,
        default: Date.now
    },
    empleadoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Empleado',
        required: true
    }
});

const Reparacion = mongoose.model('Reparacion', reparacionSchema);

module.exports = Reparacion;
