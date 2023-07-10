const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authJWT = require("../middlewares/authJWT");

// router.get("/getAllUsers", todoController.getALLTodoList);

router.get("/getUserInfo", authJWT.verifyJWTToken, userController.getUserInfo);

// router.put("/updateTodoItem", todoController.updateTodoItem);
// router.delete("/deleteTodoItem/:id", todoController.deleteTodo);

module.exports = router;
