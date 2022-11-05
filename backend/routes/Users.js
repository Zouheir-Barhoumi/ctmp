const { response } = require("express");
const { welcomeMail } = require("../config/mailer");
const User = require("../db/Users");
const JWT = require("jsonwebtoken");
const { create } = require("../db/Users");
const express = require("express"),
  router = express.Router(),
  // { createToken } = require("../authController"),
  MaxAge = 60 * 60 * 24 * 3; // 3 days

router.get("/:id", async (req, res) => {
  const user = await User.findById({ _id: req.params.id });
  res.json(user);
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    // res.cookie("JWT", token, { httpOnly: true, secure: false,  maxAge: MaxAge * 1000 });
    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: MaxAge * 1000,
      secure: false,
    });
    res.status(200).json({ user: user });
  } catch (err) {
    const errors = handleErrors(err);
    console.log(errors);
    res.status(400).json({ errors: errors });
  }
});

router.post("/signup", async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  const username = `${firstname} ${lastname}`;

  try {
    const createdUser = await User.create({
      firstname,
      lastname,
      email,
      password,
      username,
    });
    // createdUser.save();
    /* SEND WELCOME EMAIL */
    if (createdUser) {
      welcomeMail(email, username);
    }
    /* END OF SEND WELCOME EMAIL */
    const token = createToken(createdUser._id);
    // send a cookie with the token in it
    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: MaxAge * 1000,
      secure: false,
    });
    res.status(201).json({ user: createdUser._id }); // return user id instead of entire user
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json(errors);
  }
});

router.get("/logout", async (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.redirect("/");
});

function handleErrors(err) {
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
}

const createToken = (id) => {
  // JWT.sign(payload, secret key, options);
  return JWT.sign({ id }, process.env.SALT, { expiresIn: MaxAge });
};

module.exports = router;
