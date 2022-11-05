const JWT = require("jsonwebtoken");
const User = require("../backend/db/Users");

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  //   check jwt exists and is valid
  if (token) {
    JWT.verify(token, process.env.SALT, (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        // res.redirect("/");
        res.status(401).send(err);
      } else {
        req.createdBy = decodedToken.id;
        console.log(req.createdBy);
        // carry on with the next middleware
        next();
      }
    });
  } else {
    console.log("no token");
  }
};

const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;

  //   check jwt exists and is valid
  if (token) {
    JWT.verify(token, process.env.SALT, async (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.locals.user = null;
        next();
      } else {
        console.log(decodedToken);
        let user = await User.findById(decodedToken.id);
        //   make user info accessible inside views
        res.locals.user = user;
        // carry on with the next middleware
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};
module.exports = { requireAuth, checkUser };
