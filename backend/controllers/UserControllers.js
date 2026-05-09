const usercreate = require('../services/UserServices');

const handleCreateUser = async (req, res) => {
    try {
        const { firstName, lastName, email, phone, password } = req.body;
        const user = await usercreate.createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
module.exports = { handleCreateUser };