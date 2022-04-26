const toDoItemRouter = require("./toDoItems");
const usersRouter = require("./users");
const authRouter = require("./auth");

const apiRouter = (app) => {
    app.use("/toDoItems", toDoItemRouter);
    app.use("/users", usersRouter);
    app.use("/auth", authRouter);
};

module.exports = apiRouter;
