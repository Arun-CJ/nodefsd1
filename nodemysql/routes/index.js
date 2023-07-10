const express = require("express");
const router = express.Router();
const todoRoutes = require("./todoRoutes");
const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");

//Routes
router.use("/todo", todoRoutes);
router.use("/auth", authRoutes);
router.use("/user", userRoutes);

module.exports = router;
