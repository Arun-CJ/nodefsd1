const express = require("express");
const app = express();
const { mid } = require("./middlewares/samplemiddleware");
const connection = require("./helpers/db");
const routes = require("./routes/index");

app.use(express.json());

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send({ message: "Main route" });
});

app.listen(4000, () => {
  console.log("server is running on port 4040");
});
