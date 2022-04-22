const express = require('express');
const user = require('../useCases/user');
const router = express.Router();

router.get("/", (req, res) => {
    res.json({message: "Estos son todos los usuarios"});
});

router.get("/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const retrievedUser = await user.getById(id);
        res.json({
            success: true,
            payload: retrievedUser
        });
    } catch (error) {
        next(error);
    }
});

router.post("/", async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const userCreated = await user.create(username, password);
        res.json({
            success: true,
            message: "Usuario creado",
            payload: userCreated
        });
    } catch (error) {
        next(error);
    };
});

router.put("/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const { username } = req.body;
        res.json({ message: `Usuario ${id} actualizado` + username });    
    } catch (error) {
        next(error);
    };
});

router.delete("/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        res.json({ message: `Usuario ${id} eliminado` })
    } catch (error) {
        next(error);
    };
});

module.exports = router;