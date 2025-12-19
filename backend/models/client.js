const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        default: "https://ui-avatars.com/api/?name=User&background=3498db&color=fff&size=256"
    }

}, { timestamps: true });

module.exports = mongoose.model("Client", clientSchema);
