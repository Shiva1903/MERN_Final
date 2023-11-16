const express = require("express");
const router = express.Router();

const requireAuth = require("../middleware/requireAuth");
const exerciseController = require("../controllers/exerciseController");

router.use(requireAuth)

router.get("/", exerciseController.listExercises)

router.post("/", exerciseController.createExercise)

router.patch("/:id", exerciseController.updateExercise)

router.delete("/:id", exerciseController.deleteExercise)

module.exports = router

