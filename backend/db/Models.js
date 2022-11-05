const mongoose = require("mongoose"),
  schemas = require("./Schemas");

// MY OWN MONGOOSE MIDDLEWARE

const Task = mongoose.model("task", schemas.Task),
  List = mongoose.model("list", schemas.List),
  Project = mongoose.model("project", schemas.Project);
Team = mongoose.model("team", schemas.Team);

module.exports = { Task, List, Project, Team };
