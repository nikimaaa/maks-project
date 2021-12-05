const {Schema, model} = require('mongoose');
const schema = new Schema({
    name: String,
    password: String,
    avatar: String,
    age: Number,
    desc: String,
    iswhite: String
});
module.exports = model("User", schema);