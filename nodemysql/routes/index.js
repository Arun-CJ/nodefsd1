const express = require("express");
const router = express.Router();
const todoRoutes = require("./todoRoutes");
const authRoutes = require("./authRoutes");

//Routes
router.use("/todo", todoRoutes);
router.use("/auth", authRoutes);

module.exports = router;
