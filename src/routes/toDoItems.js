const express = require('express');
const router = express.Router();
const toDoItem = require('../useCases/toDoItem');
const { authHandler } = require('../middleware/authHandler');

router.get("/", async (req, res, next) => {
    try {
        const toDoItems = await toDoItem.getAll();
        res.json({
            success: true,
            payload: toDoItems
        });
    } catch (error) {
        next(error);
    };
});

router.get("/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const toDoItem = await toDoItem.getById(id);
        res.json({
            success: true,
            payload: toDoItem
        });
    } catch (error) {
        next(error);
    };
});

router.post("/", authHandler, async (req, res, next) => {
    try {
        const { description } = req.body;
        const toDoItemCreated = await toDoItem.create(description);
        res.json({
            success: true,
            message: "ToDoItem creado",
            payload: toDoItemCreated
        })
    } catch (error) {
        next(error);
    };
});

router.put("/", authHandler, async (req, res, next) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const toDoItemUpdated = await toDoItem.update(id, description);
        res.json({
            success: true,
            message: `ToDoItem ${id} actualizado`,
            payload: toDoItemUpdated
        });
    } catch (error) {
        next(error);
    };
});

router.delete("/:id", authHandler, async (req, res, next) => {
    try {
        const { id } = req.params;
        const toDoItemDeleted = await toDoItem.delete(id);
        res.json({
            success: true,
            message: `ToDoItem ${id} eliminado`,
            payload: toDoItemDeleted
        });
    } catch (error) {
        next(error);
    };
});

module.exports = router;
