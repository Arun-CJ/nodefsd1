const connection = require("../helpers/db");

module.exports = {
  getUserInfo: async (req, res) => {
    const id = res.decoded.userId;
    connection.query(
      `select id, email, name, phoneNumber from users where id = ${id}`,
      (err, results) => {
        if (err) {
          return res
            .statud(400)
            .send({ message: "Error while getting user info" });
        }
        return res.send({ message: "Success", data: results[0] });
      }
    );
  },
};
