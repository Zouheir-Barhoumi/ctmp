const mongoose = require("mongoose"),
  definitions = require("./Definition"),
  Task = new mongoose.Schema(definitions.Task);
List = new mongoose.Schema(definitions.List);
Project = new mongoose.Schema(definitions.Project);
Team = new mongoose.Schema(definitions.Team);

module.exports = {
  Task,
  List,
  Project,
  Team,
};
