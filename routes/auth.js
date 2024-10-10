// routes/auth.js

const express = require('express');
const router = express.Router();

// Ruta de ejemplo para autenticación (puedes expandirla)
router.post('/login', (req, res) => {
    // Aquí iría la lógica para la autenticación
    res.send('Iniciar sesión');
});

router.post('/register', (req, res) => {
    // Aquí iría la lógica para registrar un usuario
    res.send('Registrar usuario');
});

module.exports = router;
