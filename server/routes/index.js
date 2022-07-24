const router = require('express').Router();
const User = require('../model/User');

router.post('/api/user', async (req, res) => {

console.log("hitting");

    const {username, password, email} = req.body;
    const newUser = await User.create({
        username,
        password,
        email
    });

    res.json(newUser);
});

module.exports = router;