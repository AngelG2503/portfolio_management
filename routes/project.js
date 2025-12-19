const express = require("express");
const router = express.Router();
const { wrapAsync, validateProject } = require("../middleware/middleware");
const projectController = require("../controllers/projectController");

router.get("/", wrapAsync(projectController.getAllProjects));
router.post("/", validateProject, wrapAsync(projectController.addProject));
router.delete("/:id", wrapAsync(projectController.deleteProject));

module.exports = router;
