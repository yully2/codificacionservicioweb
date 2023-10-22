const express = require("express");
const userSchema = require("../models/user");
 const router = express.Router();
 // Crear usuario
router.post("/users", (req, res) => {
  const user = new userSchema(req.body);
   user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
 // Obtener todos los usuarios
router.get("/users", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
 // Obtener un usuario
router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
 // Eliminar un usuario
router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
 // Actualizar un usuario
router.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;
  userSchema
    .updateOne({ _id: id }, { $set: { name, age, email } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
 module.exports = router;
