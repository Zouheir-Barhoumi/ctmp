const express = require("express");
const { requireAuth } = require("../authMiddleware");
const router = express.Router();
const { List } = require("../db/Models");
const { Project } = require("../db/Models");

// GET ALL PROJECTS
router.get("/", requireAuth, async (req, res) => {
  const proejcts = await Project.find({ createdBy: req.createdBy });
  res.json(proejcts);
});

// CREATE A NEW PROJECT
router.post("/newproject", requireAuth, async (req, res) => {
  const newproject = new Project({ ...req.body, createdBy: req.createdBy });
  const saveproject = await newproject.save();
  res.json(saveproject);
});

// GET PROJECT BY ID
router.get("/:id", requireAuth, async (req, res) => {
  const project = await Project.find({
    _id: req.params.id,
    createdBy: req.createdBy,
  });
  res.json(project);
});

// GET LISTS OF A PROJECT
router.get("/:id/lists", requireAuth, async (req, res) => {
  const project = await Project.findById({
    _id: req.params.id,
    createdBy: req.createdBy,
  });
  let lists = await List.find();
  filteredByProject = lists.filter((list) => list.parent == req.params.id);

  res.json(filteredByProject);
});

// DELETE A PROJECT
router.delete("/:id", requireAuth, async (req, res) => {
  // REMOVE REFERENCE FROM CHILD LISTS FIRST
  const del = await List.updateMany(
    { parentId: req.params.id },
    { $unset: { parentId: req.params.id } }
  );
  const deletedproject = await Project.findOneAndDelete({
    _id: req.params.id,
    createdBy: req.createdBy,
  });
  res.json(deletedproject);
});

// UPDATE A PROJECT BY ID
router.put("/:id", requireAuth, async (req, res) => {
  const updated = await Project.updateOne(
    { _id: req.params.id, createdBy: req.createdBy },
    { $set: req.body }
  );
  res.send("Project udpated");
});

// CREATE A LIST IN A PROJECT
router.post("/:id/newlist", requireAuth, async (req, res) => {
  try {
    const newlist = new List({
      ...req.body,
      createdBy: req.createdBy,
      parentId: req.params.id,
    });
    newlist.save();
    const updated = await Project.updateOne(
      { _id: req.params.id, createdBy: req.createdBy },
      { $push: { lists: newlist._id } }
    );
    res.json(newlist);
  } catch (error) {}
});
module.exports = router;
