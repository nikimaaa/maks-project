const {Schema, model} = require('mongoose');
const schema = new Schema({
    name: String,
    password: String,
    avatar: String,
    age: Number,
    desc: String,
    iswhite: Boolean
});
module.exports = model("User", schema);