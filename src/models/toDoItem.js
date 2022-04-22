const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
    // title: { type: String, required: true, minlength: 3 },
    description: { type: String, required: true, maxlenght: 100 },
});

module.exports = {
    schema,
    model: mongoose.model("ToDoItem", schema),
};