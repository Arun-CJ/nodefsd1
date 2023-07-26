const express = require("express");
const app = express();
const { mid } = require("./middlewares/samplemiddleware");
const connection = require("./helpers/db");
const routes = require("./routes/index");
require("dotenv").config();
const cors = require("cors");
const path = require("path");

app.use(express.json());
app.use(cors());

app.use("/api", routes);

app.use(express.static("build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

// app.get("/", (req, res) => {
//   res.send({ message: "Main route" });
// });

app.listen(process.env.PORT, () => {
  console.log("server is running on port" + process.env.PORT);
});
