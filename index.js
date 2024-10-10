const express = require('express');
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Ruta de prueba para la API
app.get('/', (req, res) => {
    res.send('Bienvenido a la API del taller de luthería');
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
const mongoose = require('mongoose');

// Conectar a MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/lutheria_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('Error al conectar a MongoDB:', err));
const Empleado = require('./models/Empleado');

// Obtener todos los empleados
app.get('/api/empleados', async (req, res) => {
    try {
        const empleados = await Empleado.find();
        res.json(empleados);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Crear un nuevo empleado
app.post('/api/empleados', async (req, res) => {
    const empleado = new Empleado({
        nombre: req.body.nombre,
        puesto: req.body.puesto,
        salario: req.body.salario
    });

    try {
        const nuevoEmpleado = await empleado.save();
        res.status(201).json(nuevoEmpleado);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Actualizar un empleado
app.put('/api/empleados/:id', async (req, res) => {
    try {
        const empleadoActualizado = await Empleado.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(empleadoActualizado);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Eliminar un empleado
app.delete('/api/empleados/:id', async (req, res) => {
    try {
        await Empleado.findByIdAndDelete(req.params.id);
        res.json({ message: 'Empleado eliminado' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
