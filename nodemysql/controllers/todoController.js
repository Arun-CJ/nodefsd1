const connection = require("../helpers/db");

module.exports = {
  getALLTodoList: (req, res) => {
    connection.query("SELECT * FROM todolist", function (err, results) {
      if (err) {
        console.log(err);
        return res
          .status(400)
          .send({ message: "Error while getting data", error: err });
      }
      //   console.log(results); // results contains rows returned by server
      console.log(res.decoded, "inside todocontroller");
      return res.send({
        message: "Successfully retrieved todo list",
        data: results,
      });
    });
  },
  getUserTodoList: (req, res) => {
    const id = req.params.userId;
    connection.query(
      `SELECT * FROM todolist where userId = ${id}`,
      function (err, results) {
        if (err) {
          console.log(err);
          return res
            .status(400)
            .send({ message: "Error while getting data", error: err });
        }
        //   console.log(results); // results contains rows returned by server
        console.log(res.decoded, "inside todocontroller");
        return res.send({
          message: "Successfully retrieved todo list",
          data: results,
        });
      }
    );
  },
  addTodoItem: (req, res) => {
    console.log("inside add todo", req.body);
    const data = req.body;
    connection.query(
      `insert into todolist (name,userId) values ('${data.name}',${data.userId})`,
      (err, results) => {
        if (err) {
          console.log(err, "inside insert todo");
          return res
            .status(400)
            .send({ message: "Error while inserting data", error: err });
        }
        return res.send({
          message: "Successfully added new todo item",
          data: results,
        });
      }
    );
  },
  updateTodoItem: (req, res) => {
    console.log("inside update todo", req.body);
    const data = req.body;
    connection.query(
      `update todolist set name = '${data.name}' where id = ${data.id}`,
      (err, results) => {
        if (err) {
          console.log(err, "inside update todo");
          return res
            .status(400)
            .send({ message: "Error while updateing data", error: err });
        }
        return res.send({
          message: "Successfully updated todo item",
          data: results,
        });
      }
    );
  },
  deleteTodo: (req, res) => {
    console.log("inside delete");
    res.send({ message: "Inside delete" });
  },
};
