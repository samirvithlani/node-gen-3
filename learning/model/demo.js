const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: String,
    age: Number,
    email: String,
    password: String
});
const User = mongoose.model('User', UserSchema);
module.exports = User;
