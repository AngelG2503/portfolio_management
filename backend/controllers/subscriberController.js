const Subscriber = require("../models/subscribers");

exports.getAllSubscribers = async (req, res) => {
    try {
        const subscribers = await Subscriber.find();
        res.json({ success: true, data: subscribers });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

exports.addSubscriber = async (req, res) => {
    try {
        const subscriber = new Subscriber(req.body);
        await subscriber.save();
        res.json({ success: true, message: "Subscribed successfully" });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

exports.deleteSubscriber = async (req, res) => {
    try {
        await Subscriber.findByIdAndDelete(req.params.id);
        res.json({ success: true, message: "Subscriber deleted" });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
