const express = require("express");
const router = express.Router();
const authJWT = require("../middlewares/authJWT");
const todoController = require("../controllers/todoController");

router.get(
  "/getAllList",
  authJWT.verifyJWTToken,
  todoController.getALLTodoList
);

router.get(
  "/getUserTodoList/:userId",
  authJWT.verifyJWTToken,
  todoController.getUserTodoList
);

router.post("/addTodoItem", authJWT.verifyJWTToken, todoController.addTodoItem);

router.put(
  "/updateTodoItem",
  authJWT.verifyJWTToken,
  todoController.updateTodoItem
);
router.delete(
  "/deleteTodoItem/:id",
  authJWT.verifyJWTToken,
  todoController.deleteTodo
);

module.exports = router;
