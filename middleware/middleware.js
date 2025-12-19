const ExpressError = require("../utils/errorHandler");
const wrapAsync = (fn) => {
    return (req, res, next) => {
        fn(req, res, next).catch(next);
    };
};
const validateProject = (req, res, next) => {
    const { name, description } = req.body;
    if (!name || !description) {
        throw new ExpressError(400, "Project name and description are required");
    }
    next();
};

const validateClient = (req, res, next) => {
    const { name, description, designation } = req.body;
    if (!name || !description || !designation) {
        throw new ExpressError(400, "Client name, description, and designation are required");
    }
    next();
};
const validateContact = (req, res, next) => {
    const { fullName, email, mobile, city } = req.body;
    if (!fullName || !email || !mobile || !city) {
        throw new ExpressError(400, "All contact fields are required");
    }
    next();
};

const validateSubscriber = (req, res, next) => {
    const { email } = req.body;
    if (!email) {
        throw new ExpressError(400, "Email is required");
    }
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        throw new ExpressError(400, "Invalid email format");
    }
    next();
};
module.exports = {
    wrapAsync,
    validateProject,
    validateClient,
    validateContact,
    validateSubscriber
};