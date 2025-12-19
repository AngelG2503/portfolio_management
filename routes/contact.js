const express = require("express");
const router = express.Router();
const { wrapAsync, validateContact } = require("../middleware/middleware");
const contactController = require("../controllers/contactController");

router.get("/", wrapAsync(contactController.getAllContacts));
router.post("/", validateContact, wrapAsync(contactController.submitContact));
router.delete("/:id", wrapAsync(contactController.deleteContact));

module.exports = router;
