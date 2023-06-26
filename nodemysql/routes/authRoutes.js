const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/registeruser", authController.registerUser);
router.post("/loginuser", authController.registerUser);

module.exports = router;
