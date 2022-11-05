const express = require("express");
const { requireAuth } = require("../authMiddleware");
const router = express.Router();
const { Task } = require("../db/Models");
const { List } = require("../db/Models");

// Get all tasks
router.get("/", requireAuth, async (req, res) => {
  const tasks = await Task.find({ createdBy: req.createdBy });
  res.json(tasks);
});

// Create and save a new task (can use the same to save new projects or lists /new/project ...)
router.post("/newtask", requireAuth, async (req, res) => {
  const newTask = new Task({ ...req.body, createdBy: req.createdBy });

  const savedTask = await newTask.save();
  res.json(savedTask);
});

// GET TASK BY ID
router.get("/:id", requireAuth, async (req, res) => {
  let task = await Task.findById({
    _id: req.params.id,
    createdBy: req.createdBy,
  });
  res.send(task);
});

// // Delete a task by id
// router.delete("/:id", async (req, res) => {
//   const del = await Task.findByIdAndDelete({ _id: req.params.id });
//   res.json(del);
// });

// Delete a task by id
router.delete("/:id", requireAuth, async (req, res) => {
  let item = await Task.findById({ _id: req.params.id });
  // if task has parent list
  if (item.parentId) {
    // get the parent list
    const parentFound = await List.findById({ _id: item.parentId });
    // get the tasks referenced in the parent list
    let arr = parentFound.tasks;
    // filter out the list item that matches the current task
    arr = arr.filter((el) => el != req.params.id);
    console.log(arr);
    const updateList = await List.updateOne(
      { _id: item.parentId },
      { $set: { tasks: arr } }
    );
  }
  const del = await Task.findByIdAndDelete({ _id: req.params.id });
  res.json(del);
});

// UPDATE A TASK BY ID
router.put("/:id", requireAuth, async (req, res) => {
  const toUpdate = await Task.updateOne(
    { _id: req.params.id, createdBy: req.createdBy },
    {
      $set: {
        ...req.body,
        // text: req.body.text,
        // priority: req.body.priority,
        dateUpdated: Date.now(),
        // deadline: req.body.deadline,
        // completed: req.body.completed,
      },
    }
    // { _id: req.params.id },
    // {
    //   text: "Just do it!",
    // }
  ).then(() => {
    res.sendStatus(200);
  });
  //   res.json(toUpdate);
});

module.exports = router;
