const express = require('express');
const user = require('../useCases/user');
const jwt = require('../lib/jwt');
const router = express.Router();

router.post("/login", async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const retrievedUser = await user.getByUsername(username);
        const isMatch = await user.authenticate(retrievedUser, password);
        if (isMatch) {
            const token = await jwt.sign({
                sub: retrievedUser._id,
                username: retrievedUser.username
            });
            res.json({
                success: true,
                payload: token,
            });
        } else {
            res
            .status(401)
            .json({
                success: false,
                message: "Contraseña incorrecta"
            });
        };
    } catch (err) {
        next(err);
    }
});

module.exports = router;