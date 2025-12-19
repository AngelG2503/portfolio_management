require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const ExpressError = require("./utils/errorHandler");
const projectRoutes = require("./routes/project");
const clientRoutes = require("./routes/client");
const contactRoutes = require("./routes/contact");
const subscriberRoutes = require("./routes/subscriber");

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

const dbUrl = process.env.MONGODB_URI;

async function main() {
    await mongoose.connect(dbUrl);
}

main()
    .then(() => {
        console.log("Database connected");
    })
    .catch((err) => {
        console.log("Database connection error:", err);
    });

app.get("/", (req, res) => {
    res.json({ message: "Server is running!" });
});

app.use("/api/projects", projectRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/subscribers", subscriberRoutes);


app.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }

    const { statusCode = 500, message = "Something went wrong" } = err;
    console.error(err.stack);

    res.status(statusCode).json({
        success: false,
        error: message
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});