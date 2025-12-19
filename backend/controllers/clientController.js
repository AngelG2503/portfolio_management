const Client = require("../models/client");

exports.getAllClients = async (req, res) => {
    try {
        const clients = await Client.find();
        res.json({ success: true, data: clients });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

exports.addClient = async (req, res) => {
    try {
        const client = new Client(req.body);
        await client.save();
        res.json({ success: true, data: client });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

exports.deleteClient = async (req, res) => {
    try {
        await Client.findByIdAndDelete(req.params.id);
        res.json({ success: true, message: "Client deleted" });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
