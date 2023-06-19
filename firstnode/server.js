const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  response.send("Inside get method");
});

app.get("/anothergetmethod/:userid/name/:name", (request, response) => {
  console.log(request.params);
  response.send(
    `Inside another get method, Params are userid: ${request.params.userid} and name: ${request.params.name}`
  );
});

app.get("/queryparams", (req, res) => {
  console.log("accessing query params", req.query);
  res.send("accessing query params");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Inside post method");
});

app.put("/", (req, res) => {
  console.log(req.body);
  res.send("Inside put method");
});

app.delete("/:userid", (req, res) => {
  res.send("Inside delete method, deleted user with id " + req.params.userid);
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
