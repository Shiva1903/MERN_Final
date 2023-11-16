const express = require("express");
const router = express.Router();

const requireAuth = require("../middleware/requireAuth")
const workoutController = require("../controllers/workoutController");

router.use(requireAuth)

router.get("/", workoutController.listWorkouts)

router.get("/:id", workoutController.detailWorkout)

router.post("/", workoutController.createWorkout)

router.patch("/:id", workoutController.updateWorkout)

router.delete("/:id", workoutController.deleteWorkout)

module.exports = router