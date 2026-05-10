const { createUser, loginUser } = require('../services/UserServices');

const handleCreateUser = async (req, res) => {
    try {
        const user = await createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const handleLoginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await loginUser(email, password);
        
        res.status(200).json(result);
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
};

module.exports = { handleCreateUser, handleLoginUser };