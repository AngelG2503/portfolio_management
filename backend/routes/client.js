const express = require("express");
const router = express.Router();
const { wrapAsync, validateClient } = require("../middleware/middleware");
const clientController = require("../controllers/clientController");

router.get("/", wrapAsync(clientController.getAllClients));
router.post("/", validateClient, wrapAsync(clientController.addClient));
router.delete("/:id", wrapAsync(clientController.deleteClient));

module.exports = router;
