// routes/clientes.js
const express = require('express');
const Cliente = require('../models/cliente');
const router = express.Router();

// Listar todos los clientes
router.get('/', async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Crear un nuevo cliente
router.post('/', async (req, res) => {
    const cliente = new Cliente({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        telefono: req.body.telefono,
        email: req.body.email
    });

    try {
        const nuevoCliente = await cliente.save();
        res.status(201).json(nuevoCliente);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Modificar un cliente
router.put('/:id', async (req, res) => {
    try {
        const cliente = await Cliente.findById(req.params.id);
        if (!cliente) return res.status(404).json({ message: 'Cliente no encontrado' });

        cliente.nombre = req.body.nombre;
        cliente.apellido = req.body.apellido;
        cliente.telefono = req.body.telefono;
        cliente.email = req.body.email;

        const clienteActualizado = await cliente.save();
        res.json(clienteActualizado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Borrar un cliente
router.delete('/:id', async (req, res) => {
    try {
        const cliente = await Cliente.findById(req.params.id);
        if (!cliente) return res.status(404).json({ message: 'Cliente no encontrado' });

        await cliente.remove();
        res.json({ message: 'Cliente borrado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
