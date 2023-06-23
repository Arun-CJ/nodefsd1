const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root@123",
  database: "todoapp",
});

connection.connect((err) => {
  if (err) {
    console.log("error while connecting to db", err);
  }
  console.log("Mysql connected successfully");
});

module.exports = connection;
