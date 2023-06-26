const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");

router.get("/getAllUsers", todoController.getALLTodoList);

router.post("/getsingleuser/:id", todoController.addTodoItem);

// router.put("/updateTodoItem", todoController.updateTodoItem);
// router.delete("/deleteTodoItem/:id", todoController.deleteTodo);

module.exports = router;
