const connection = require("../helpers/db");
const {
  registerSchema,
  loginSchema,
} = require("../validations/authValidations");
const bcrypt = require("bcrypt");
const saltrounds = 10;
const authJwt = require("../middlewares/authJWT");

module.exports = {
  registerUser: (req, res) => {
    // console.log("inside register user request", req.body);
    const data = req.body;
    try {
      const { error, value } = registerSchema.validate(data);
      // console.log(error, "errors");
      // console.log(value, "values");
      if (error) {
        return res.status(400).send({ message: error.details[0].message });
      }
      bcrypt.hash(data.password, saltrounds, function (err, hash) {
        if (err) {
          return res
            .status(400)
            .send({ message: "Error while hashing password", error: err });
        }
        // console.log(hash, data.password);
        // Store hash in your password DB.

        connection.query(
          `insert into users (name, email, phoneNumber, password, city) values
      ('${data.name}','${data.email}',${data.phoneNumber},'${hash}', '${data.city}')`,
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
      });
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .send({ message: "Error while adding user data", error: error });
    }
  },
  loginUser: (req, res) => {
    try {
      const data = req.body;
      const { error, value } = loginSchema.validate(data);
      if (error) {
        return res.status(400).send({ message: error.details[0].message });
      }
      connection.query(
        `select * from users where email='${data.email}'`,
        (queryErr, queryResults) => {
          if (queryErr) {
            return res
              .status(400)
              .send({ message: "Error while singin", error: queryErr });
          }
          if (queryResults.length === 0) {
            return res.status(400).send({ message: "Email does not exist!!!" });
          }
          bcrypt.compare(
            data.password,
            queryResults[0].password,
            async function (err, result) {
              if (err) {
                return res
                  .status(400)
                  .send({ message: "Password Match error", error: err });
              }
              if (result) {
                const payload = {
                  userId: queryResults[0].id,
                };
                const token = await authJwt.signJWTToken(payload);
                console.log(token);
                return res.send({ message: "Login Successfull", token: token });
              }
              return res
                .status(400)
                .send({ message: "Password does not matches" });
            }
          );
        }
      );
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .send({ message: "Error while singin", error: error });
    }
  },
};
