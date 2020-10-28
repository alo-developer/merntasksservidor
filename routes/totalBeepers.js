//Rutas para crear usuarios
const express = require("express");
const router = express.Router();
const totalBeepersController = require("../controllers/totalBeepersController");

router.post(
  "/totalBeepers",

  totalBeepersController.crearBeeper
);

router.get(
  "/totalBeepers",

  totalBeepersController.crearBeeper
);
module.exports = router;
