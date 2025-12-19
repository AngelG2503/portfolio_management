const Contact = require("../models/contact");

exports.getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json({ success: true, data: contacts });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

exports.submitContact = async (req, res) => {
    try {
        const contact = new Contact(req.body);
        await contact.save();
        res.json({ success: true, message: "Contact form submitted successfully" });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

exports.deleteContact = async (req, res) => {
    try {
        await Contact.findByIdAndDelete(req.params.id);
        res.json({ success: true, message: "Contact deleted" });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
