const express = require("express");
const router = express.Router();

const goalController = require("../controllers/goalController")
const requireAuth = require("../middleware/requireAuth")

router.use(requireAuth)

router.get("/", goalController.listGoals)

router.get("/:id", goalController.detailGoal)

router.post("/", goalController.createGoal)

router.patch("/:id", goalController.updateGoal)

router.delete("/:id", goalController.deleteGoal)

module.exports = router