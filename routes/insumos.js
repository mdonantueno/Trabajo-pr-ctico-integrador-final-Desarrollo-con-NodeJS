// routes/insumos.js
const express = require('express');
const Insumo = require('../models/insumo');
const router = express.Router();

// Listar todos los insumos
router.get('/', async (req, res) => {
    try {
        const insumos = await Insumo.find();
        res.json(insumos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Crear un nuevo insumo
router.post('/', async (req, res) => {
    const insumo = new Insumo({
        nombre: req.body.nombre,
        cantidad: req.body.cantidad,
        costo: req.body.costo,
        proveedor: req.body.proveedor
    });

    try {
        const nuevoInsumo = await insumo.save();
        res.status(201).json(nuevoInsumo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Modificar un insumo
router.put('/:id', async (req, res) => {
    try {
        const insumo = await Insumo.findById(req.params.id);
        if (!insumo) return res.status(404).json({ message: 'Insumo no encontrado' });

        insumo.nombre = req.body.nombre;
        insumo.cantidad = req.body.cantidad;
        insumo.costo = req.body.costo;
        insumo.proveedor = req.body.proveedor;

        const insumoActualizado = await insumo.save();
        res.json(insumoActualizado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Borrar un insumo
router.delete('/:id', async (req, res) => {
    try {
        const insumo = await Insumo.findById(req.params.id);
        if (!insumo) return res.status(404).json({ message: 'Insumo no encontrado' });

        await insumo.remove();
        res.json({ message: 'Insumo borrado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
