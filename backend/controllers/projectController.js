const Project = require("../models/project");

exports.getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.json({ success: true, data: projects });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

exports.addProject = async (req, res) => {
    try {
        const project = new Project(req.body);
        await project.save();
        res.json({ success: true, data: project });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

exports.deleteProject = async (req, res) => {
    try {
        await Project.findByIdAndDelete(req.params.id);
        res.json({ success: true, message: "Project deleted" });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
