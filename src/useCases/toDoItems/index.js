const ToDoItem = require("../../models/toDoItem").model;

const getAll = async () => {
    return await ToDoItem.find({}).exec();
};

const getByWord = async (word) => {
    const toDoItem = await ToDoItem.findByOne({ description: word }).exec();
    return toDoItem;
};

const create = async (description) => {
    const toDoItem = new ToDoItem(description);
    return await toDoItem.save();
};

const update = async (id, description) => {
    const toDoItem = await ToDoItem.findByIdAndUpdate(id, 
        { description },
        { new: true }
    ).exec();
    return toDoItem;
};

const del = async (id) => {
    return await ToDoItem.findByIdAndDelete(id).exec();
};

module.exports = {
    getAll,
    getByWord,
    create,
    update,
    del
};