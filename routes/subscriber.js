const express = require("express");
const router = express.Router();
const { wrapAsync, validateSubscriber } = require("../middleware/middleware");
const subscriberController = require("../controllers/subscriberController");

router.get("/", wrapAsync(subscriberController.getAllSubscribers));
router.post("/", validateSubscriber, wrapAsync(subscriberController.addSubscriber));
router.delete("/:id", wrapAsync(subscriberController.deleteSubscriber));

module.exports = router;
