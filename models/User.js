const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullName: String,
    email: String,
    password: String,
    phone: String,
});
module.exports = mongoose.model("User", userSchema);
