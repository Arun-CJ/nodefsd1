const connection = require("../helpers/db");

module.exports = {
  registerUser: (req, res) => {
    console.log("inside register user request", req.body);
    const data = req.body;
    try {
      connection.query(
        `insert into users (name, email, phoneNumber, password, city) values 
      ('${data.name}','${data.email}',${data.phoneNumber},'${data.password}', '${data.city}')`,
        (err, results) => {
          if (err) {
            console.log(err);
            return res
              .status(400)
              .send({ message: "Error while adding user data", error: err });
          }
          return res.send({ message: "Successfully registered user" });
        }
      );
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .send({ message: "Error while adding user data", error: error });
    }
  },
  loginUser: (req, res) => {
    try {
      console.log("logged in");
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .send({ message: "Error while signup", error: error });
    }
  },
};
