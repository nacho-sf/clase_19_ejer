// Módulos externos
const express = require('express')
require('./utils/dbMongo.js'); // Abrir conexión a la BBDD Mongo

// dotenv
require('dotenv').config()
console.log(process.env) // Borrar console.log después de ver que funciona

const app = express()
const port = 3000

// Ruta de productos
const productsApiRoutes = require("./routes/productsApiRoutes");

app.use(express.json());

// BROWSER:
app.use('/api/products', productsApiRoutes);

// HOME
// http://127.0.0.1:3000
// http://localhost:3000
app.get('/', (req, res) => {
    res.send('Hola desde mi primer servidor!')
})

app.listen(port, () => {
    console.log(`Mi servidor funciona en el puerto ${port}`)
})