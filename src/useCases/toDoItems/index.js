const toDoItem = require("../../models/toDoItem").model;

const getAll = async () => {
    return await toDoItem.find({}).exec();
};

const getByWord = async (word) => {
    const toDoItem = await toDoItem.findByOne({ description: word }).exec();
    return toDoItem;
};

const create = async (description) => {
    const toDoItem = new toDoItem({ description });
    return await toDoItem.save();
};

const update = async (id, description) => {
    const toDoItem = await toDoItem.findByIdAndUpdate(id, 
        { description },
        { new: true }
    ).excec();
    return toDoItem;
};

const del = async (id) => {
    return await toDoItem.findByIdAndDelete(id).exec();
};

module.exports = {
    getAll,
    getByWord,
    create,
    update,
    del
};