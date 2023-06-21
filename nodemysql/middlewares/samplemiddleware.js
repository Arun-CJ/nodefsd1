module.exports = {
  mid: (req, res, next) => {
    console.log(
      "inside middleware, checking for constraints, validations, authentication"
    );
    next();
  },
};
