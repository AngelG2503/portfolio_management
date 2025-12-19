require("dotenv").config();
const mongoose = require("mongoose");
const initData = require("./initData.js");
const Project = require("../models/project.js");
const Client = require("../models/client.js");

const MONGO_URL = process.env.MONGODB_URI;

main()
    .then(() => {
        console.log("database connected");
        initDB();
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Project.deleteMany({});
    await Client.deleteMany({});

    await Project.insertMany(initData.projects);
    await Client.insertMany(initData.clients);

    console.log("✅ Projects added:", initData.projects.length);
    console.log("✅ Clients added:", initData.clients.length);
    console.log("Data was initialized successfully!");

    process.exit(0);
};
