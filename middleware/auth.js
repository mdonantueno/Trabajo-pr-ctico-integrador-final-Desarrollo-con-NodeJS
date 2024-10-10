// middleware/auth.js

const jwt = require('jsonwebtoken');

// Middleware para verificar el token
const verificarToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(403).send('Acceso denegado. No se proporcionó token.');

    try {
        const verificado = jwt.verify(token, 'tu_secreto'); // Cambia 'tu_secreto' por una cadena secreta real
        req.user = verificado;
        next();
    } catch (error) {
        res.status(400).send('Token no válido.');
    }
};

module.exports = verificarToken;
