const express = require("express");
const { requireAuth } = require("../authMiddleware");
const router = express.Router();
const { Team } = require("../db/Models");
const User = require("../db/Users");
const Mailer = require("../config/mailer");

// GET ALL TEAMS
router.get("/", requireAuth, async (req, res) => {
  try {
    if (Team.find()) {
      const teams = await Team.find({ createdBy: req.createdBy });
      res.json(teams);
    } else {
      res.send("No teams found");
    }
  } catch (error) {
    console.log(error);
  }
});
// GET A TEAM BY ID
router.get("/:id", requireAuth, async (req, res) => {
  try {
    if (Team.find()) {
      const teams = await Team.find({
        _id: req.params.id,
        createdBy: req.createdBy,
      });
      res.json(teams);
    } else {
      res.send("No teams found");
    }
  } catch (error) {
    console.log(error);
  }
});

// CREATE A TEAM
router.post("/newteam", requireAuth, async (req, res) => {
  const newTeam = new Team({ ...req.body, createdBy: req.createdBy });

  const savedTeam = await newTeam.save();
  res.json(savedTeam);
});

// UPDATE A TEAM BY ID (add a new member by email)
router.put("/:id", requireAuth, async (req, res) => {
  try {
    let sender = await User.find({ _id: req.createdBy });
    sender = sender[0].username;
    let user = await User.find({ email: req.body.email });
    if (user == "") {
      console.log("Not registered");
      Mailer.invitationMail(req.body.email, sender);
    }
    const updated = await Team.updateOne(
      {
        _id: req.params.id,
        createdBy: req.createdBy,
        "members.email": { $ne: req.body.email },
      },
      { $push: { members: { email: req.body.email } } }
    );
    res.send("Team udpated " + user);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

// DELETE A TEAM
router.delete("/:id", requireAuth, async (req, res) => {
  const deleted = await Team.deleteOne({
    _id: req.params.id,
    createdBy: req.createdBy,
  });
  res.json(deleted);
});

module.exports = router;
