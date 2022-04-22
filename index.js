const express = require('express');
const db = require("./src/lib/db");
const config = require("./src/lib/config");
const { logErrors, errorHandler } = require('./src/middleware/errorHandler');
const app = express();
const port = config.app.port;

app.use(express.json());
app.use(logErrors);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Welcome to ${config.app.name} app, now listening on port ${port}`);
    db.connect()
    .then(() => {
        console.log("DB Connected")
    })
    .catch(err => {
        console.log("Conecction Failed", err);
    });
});


