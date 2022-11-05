const mongoose = require("mongoose"),
  { isEmail } = require("validator"),
  bcrypt = require("bcrypt");

const UserSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "Please enter your first name"],
    trim: true,
  },
  lastname: {
    type: String,
    required: [true, "Please enter your last name"],
    trim: true,
  },
  username: {
    type: String,
    trim: true,
    required: false,
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    trim: true,
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter a valid email!"],
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minlength: [8, "Password must be at least 8 characters"],
  },
  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      index: true,
      ref: "Task",
    },
  ],
  lists: [
    {
      type: mongoose.Schema.Types.ObjectId,
      index: true,
      ref: "List",
    },
  ],
  projects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      index: true,
      ref: "Project",
    },
  ],
  teams: [
    {
      type: mongoose.Schema.Types.ObjectId,
      index: true,
      ref: "Team",
    },
  ],
  // _todos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }],
  // _lists: [{ type: mongoose.Schema.Types.ObjectId, ref: "List" }],
  // _projects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Project" }],
});

UserSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// static method to login a user
UserSchema.statics.login = async function (email, password) {
  // find by email
  const user = await this.findOne({ email });
  // user found
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    // passwords match
    if (auth) {
      return user;
    }
    throw Error("Incorrect password");
    // passwords don't match
    // throw Error("Incorrect email or passord");
  }
  throw Error("Incorrect email");
  // email not in db
};

module.exports = mongoose.model("user", UserSchema);
