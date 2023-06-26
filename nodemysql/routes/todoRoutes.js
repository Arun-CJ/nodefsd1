const express = require("express");
const router = express.Router();
// const connection = require("../helpers/db");
const todoController = require("../controllers/todoController");

router.get("/getAllList", todoController.getALLTodoList);

router.post("/addTodoItem", todoController.addTodoItem);

router.put("/updateTodoItem", todoController.updateTodoItem);
router.delete("/deleteTodoItem/:id", todoController.deleteTodo);

module.exports = router;
