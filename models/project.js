const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800"
    }


}, { timestamps: true });

module.exports = mongoose.model("Project", projectSchema);