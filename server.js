// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth'); // Asegúrate de que esta línea esté presente si has creado rutas de autenticación
const reparacionesRoutes = require('./routes/reparaciones'); // Importa las rutas de reparaciones

const app = express();
const port = 3000;

// Conexión a la base de datos
mongoose.connect('mongodb://localhost:27017/lutheria_db', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado a la base de datos MongoDB'))
    .catch(err => console.error('No se pudo conectar a la base de datos MongoDB', err));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas
app.use('/api/auth', authRoutes); // Rutas de autenticación
app.use('/api/reparaciones', reparacionesRoutes); // Rutas de reparaciones

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
