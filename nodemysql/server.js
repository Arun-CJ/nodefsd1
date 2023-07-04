const express = require("express");
const app = express();
const { mid } = require("./middlewares/samplemiddleware");
const connection = require("./helpers/db");
const routes = require("./routes/index");
require("dotenv").config();

app.use(express.json());

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send({ message: "Main route" });
});

app.listen(process.env.PORT, () => {
  console.log("server is running on port 4040");
});
