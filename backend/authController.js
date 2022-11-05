const User = require("./db/Users");
require("dotenv").config({ path: ".env" });
JWT = require("jsonwebtoken");
const SALT = process.env.SALT,
  MaxAge = 60 * 60 * 24 * 3;

module.exports.createToken = (id) => {
  // JWT.sign(payload, secret key, options);
  return JWT.sign({ id }, SALT, { expiresIn: MaxAge });
};

module.exports.handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { email: "", password: "" };

  // Incorrect email
  if (err.message === "Incorrect email") {
    errors.email = "Email is not registered";
  }
  // Incorrect password
  if (err.message === "Incorrect password") {
    errors.password = "Password is incorrect";
  }

  // Duplicate email error
  if (err.code === 11000) {
    errors.email = "That email is already registered... login!";
    return errors;
  }

  // Validation Errors
  if (err.message.includes("user validation failed"))
    Object.values(err.errors).forEach(
      (e) => (errors[e.properties.path] = e.properties.message)
    );

  // console.log(errors);
  return errors;

  // console.log(error.message, error.code); //
  // return error;
};
