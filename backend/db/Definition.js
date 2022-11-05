const { user } = require("../db/Users");
const mongoose = require("mongoose"),
  Task = {
    // _id: Object,
    createdBy: { type: mongoose.Types.ObjectId, required: false },
    text: {
      type: mongoose.Schema.Types.String,
      required: true,
      minlength: 1,
      trim: true,
    },
    priority: { type: mongoose.Schema.Types.String, required: false },
    dateCreated: {
      type: mongoose.Schema.Types.Date,
      required: false,
      default: Date.now(),
    },
    dateUpdated: {
      type: mongoose.Schema.Types.Date,
      required: false,
      default: Date.now(),
    },
    deadline: {},
    // assignees: Array,
    completed: {
      type: mongoose.Schema.Types.Boolean,
      required: false,
      default: false,
    },
    parentId: {
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  List = {
    createdBy: { type: mongoose.Types.ObjectId, required: false },
    text: {
      type: mongoose.Schema.Types.String,
      required: true,
      minlength: 1,
      trim: true,
    },
    dateCreated: {
      type: mongoose.Schema.Types.Date,
      required: false,
      default: Date.now(),
    },
    dateUpdated: {
      type: mongoose.Schema.Types.Date,
      required: false,
      default: Date.now(),
    },
    parentId: {
      type: mongoose.Schema.Types.ObjectId,
    },
    tasks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
        ref: "Task",
      },
    ],
  },
  Project = {
    createdBy: { type: mongoose.Types.ObjectId, required: false },
    text: {
      type: mongoose.Schema.Types.String,
      required: true,
      minlength: 1,
      trim: true,
    },
    dateCreated: {
      type: mongoose.Schema.Types.Date,
      required: false,
      default: Date.now(),
    },
    dateUpdated: {
      type: mongoose.Schema.Types.Date,
      required: false,
      default: Date.now(),
    },
    lists: [
      {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
        ref: "List",
      },
    ],
  };
Team = {
  createdBy: { type: mongoose.Types.ObjectId, required: false },
  text: {
    type: mongoose.Schema.Types.String,
    required: true,
    minlength: 1,
    trim: true,
  },
  dateCreated: {
    type: mongoose.Schema.Types.Date,
    required: false,
    default: Date.now(),
  },
  dateUpdated: {
    type: mongoose.Schema.Types.Date,
    required: false,
    default: Date.now(),
  },
  members: [
    {
      // user: { type: mongoose.Schema.Types.ObjectId, index: true, ref: "user" },
      email: {
        type: String,
        trim: true,
        lowercase: true,
      },
    },
  ],
};

module.exports = {
  Task,
  List,
  Project,
  Team,
};
