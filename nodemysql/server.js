const express = require("express");
const app = express();
const { mid } = require("./middlewares/samplemiddleware");
const connection = require("./helpers/db");

app.use(express.json());

app.get("/", mid, (req, res) => {
  connection.query("SELECT * FROM `todolist23`", function (err, results) {
    if (err) {
      console.log(err);
      return res
        .status(400)
        .send({ message: "Error while getting data", error: err });
    }
    console.log(results); // results contains rows returned by server

    return res.send({ message: "Successfully retrieved", data: results });
  });
});

app.listen(4000, () => {
  console.log("server is running on port 4040");
});
