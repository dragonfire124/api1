const User = require('../../models/user').model;
const encrypt = require('../../lib/encrypt');

const getAll = async () => {
    return await User.find({}).exec();
};

const getById = async (id) => {
    return await User.findById(id).exec();
};

const getByUsername = async (username) => {
    return await User.findOne({ username }).exec();
};

const authenticate = async (user, password) => {
    const hash = user.password;
    return await encrypt.verifyPassword(password, hash);
};

const create = async (username, password) => {
    const hash = await encrypt.hashPassword(password);
    const user = new User({ username, password: hash });
    return user.save();
};

const del = async (id) => {
    return await User.findByIdAndDelete(id).exec();
};

module.exports = {
    getAll,
    getById,
    getByUsername,
    authenticate,
    create,
    del,
};

