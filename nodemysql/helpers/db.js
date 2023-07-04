const mysql = require("mysql2");
require("dotenv").config();
const {
  MYSQL_DATABASE,
  MYSQL_HOST,
  MYSQL_PASSWORD,
  MYSQL_USERNAME,
} = require("../config/config");

const connection = mysql.createConnection({
  user: MYSQL_USERNAME,
  host: MYSQL_HOST,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE,
});

connection.connect((err) => {
  if (err) {
    console.log("error while connecting to db", err);
  }
  console.log("Mysql connected successfully");
});

module.exports = connection;
