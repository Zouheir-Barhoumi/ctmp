const { requireAuth } = require("../authMiddleware");

const express = require("express"),
  { Task } = require("../db/Models"),
  router = express.Router(),
  { List } = require("../db/Models");

// GET ALL LISTS
router.get("/", requireAuth, async (req, res) => {
  const lists = await List.find({ createdBy: req.createdBy });
  res.json(lists);
});

// CREATE A NEW LIST
router.post("/newlist", requireAuth, async (req, res) => {
  const newlist = new List({
    ...req.body,
    createdBy: req.createdBy,
    parentId: req.params.id,
  });
  const savedlist = await newlist.save();
  res.json(savedlist);
});

// GET LIST BY ID
router.get("/:id", requireAuth, async (req, res) => {
  const list = await List.find({
    _id: req.params.id,
    createdBy: req.createdBy,
  });
  res.json(list);
});

// GET TASKS OF A LIST
router.get("/:id/tasks", requireAuth, async (req, res) => {
  const list = await List.find({
    _id: req.params.id,
    createdBy: req.createdBy,
  });
  let tasks = await Task.find();
  filteredByList = tasks.filter((task) => task.parent == req.params.id);

  res.json(filteredByList);
});

// DELETE A LIST
router.delete("/:id", requireAuth, async (req, res) => {
  // REMOVE CHILD TASKS FIRST
  const del = await deleteTasksInList(req.params.id);
  const deletedlist = await List.deleteOne({
    _id: req.params.id,
    createdBy: req.createdBy,
  });
  // res.json(deletedlist);
  res.json(del);
});
let deleteTasksInList = async (listId) => {
  Task.deleteMany({ parentId: listId })
    .then(() => {
      const del = console.log("Tasks were deleted from " + listId);
      return del;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

// UPDATE A LIST BY ID
router.put("/:id", requireAuth, async (req, res) => {
  try {
    const updated = await List.updateOne(
      { _id: req.params.id, createdBy: req.createdBy },
      { $set: { text: req.body.text, dateUpdated: Date.now() } }
    );
    res.send("List udpated");
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

// CREATE A TASK IN A LIST
router.post("/:id/newtask", requireAuth, async (req, res) => {
  try {
    const newTask = new Task({
      ...req.body,
      createdBy: req.createdBy,
      parentId: req.params.id,
    });
    const updated = await List.updateOne(
      { _id: req.params.id, createdBy: req.createdBy },
      { $push: { tasks: newTask._id } }
    );
    newTask.save();
    res.json(newTask);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});
module.exports = router;
