// routes/reparaciones.js

const express = require('express');
const router = express.Router();
const Reparacion = require('../models/reparacion');
const verificarToken = require('../middleware/auth'); // Importa el middleware de autenticación

// Listar todas las reparaciones
router.get('/', async (req, res) => {
    try {
        const reparaciones = await Reparacion.find();
        res.json(reparaciones);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Crear una nueva reparación (protegido por token)
router.post('/', verificarToken, async (req, res) => {
    const reparacion = new Reparacion({
        descripcion: req.body.descripcion,
        costo: req.body.costo,
        empleadoId: req.body.empleadoId
    });
    
    try {
        const nuevaReparacion = await reparacion.save();
        res.status(201).json(nuevaReparacion);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Modificar una reparación (protegido por token)
router.put('/:id', verificarToken, async (req, res) => {
    try {
        const reparacion = await Reparacion.findById(req.params.id);
        if (!reparacion) return res.status(404).send('No se encontró la reparación');

        reparacion.descripcion = req.body.descripcion || reparacion.descripcion;
        reparacion.costo = req.body.costo || reparacion.costo;

        const reparacionActualizada = await reparacion.save();
        res.json(reparacionActualizada);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Borrar una reparación (protegido por token)
router.delete('/:id', verificarToken, async (req, res) => {
    try {
        const reparacion = await Reparacion.findById(req.params.id);
        if (!reparacion) return res.status(404).send('No se encontró la reparación');

        await reparacion.remove();
        res.json({ message: 'Reparación eliminada' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
