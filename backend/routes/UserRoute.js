const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserControllers');

router.post('/users', UserController.handleCreateUser);

module.exports = router;