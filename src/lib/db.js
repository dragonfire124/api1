const mongoose = require('mongoose');
const config = require('./config');

const connect = () => {
    return new Promise((resolve, reject) => {
        mongoose.connect(`mongodb+srv://${config.db.user}:${config.db.password}@${config.db.host}/${config.db.baseCollection}?retryWrites=true&w=majority`,
        { useNewUrlParser: true }
        );
        const db = mongoose.connection;
        db.on("open", () => {
            console.log("Database Connection Successful 😎");
            resolve(mongoose);
        });
        db.on("error", (err) => {
            console.log("Database Connection Failed");
            reject(err);
        });
    });
};

module.exports = { connect };