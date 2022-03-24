const jwt = require("jsonwebtoken");
const User = require("../models/User");
const config = require("config");

const secret = config.get("secret");

const auth = async (req, res, next) => {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, secret);
        const user = await User.findById(decoded.id);
        if (!user) {
            res.status(404).json({ msg: "not authorization " });
        } else {
            req.user = user;
            next();
        }
    } catch (error) {
        res.status(505).json({ msg: error.message });
    }
};
module.exports = auth;
