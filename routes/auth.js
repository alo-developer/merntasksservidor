//Rutas para autenticar usuarios
const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const auth = require("../middleware/auth");
const authController = require("../controllers/authController");

//POST:Crea un usuario//Iniciar sesion------------------------------->
//api/auth
router.post("/",
  // [
  //   check("email", "Agrega un email válido").isEmail(),
  //   check("password", "El password debe ser minimo de 6 caracteres").isLength({
  //     min: 6,
  //   }),
  // ],
  authController.autenticarUsuario
);
//GET--------------------------------------------------------------->
//Dice muy importante tiene que tener el auth para que este autenticado
router.get('/',
    auth,
    authController.usuarioAutenticado
);




module.exports = router;
