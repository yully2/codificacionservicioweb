// Importamos las dependencias necesarias
const express = require("express"); // Express es un framework de Node.js para crear aplicaciones web
const mongoose = require("mongoose"); // Mongoose es una biblioteca de modelado de objetos de MongoDB para Node.js
require("dotenv").config(); // Cargamos las variables de entorno desde el archivo .env
const userRoutes = require("./routes/user"); // Importamos las rutas relacionadas con los usuarios
 // Configuración
 const app = express(); // Creamos una instancia de la aplicación Express
const port = process.env.PORT || 9000; // Definimos el puerto en el que se ejecutará el servidor
 // Middlewares (intermediarios entre las peticiones y las respuestas)
 // Rutas
app.get("/", (req, res) => {
  res.send("Bienvenido a mi API"); // Ruta de inicio, devuelve un mensaje de bienvenida
});
 // Conexión a MongoDB
mongoose.connect('mongodb+srv://julian:JZyBEcAiAKOg6z9m@fashion.ce8hwuo.mongodb.net/?retryWrites=true&w=majority', 
{useNewUrlParser: true }, () => {
    console.log('Hay conexión a la base de datos'); // Conexión exitosa a la base de datos
});
 // Iniciar el servidor
app.listen(port, () => console.log("Servidor escuchando en el puerto", port));