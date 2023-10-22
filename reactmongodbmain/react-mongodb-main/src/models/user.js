const mongoose = require("mongoose");
 // Definición del esquema de usuario
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true, // El nombre es obligatorio
  },
  age: {
    type: Number,
    required: true // La edad es obligatoria
  },
  email: {
    type: String,
    required: true // El correo electrónico es obligatorio
  }
});
 // Exportación del modelo de usuario
module.exports = mongoose.model('User', userSchema);