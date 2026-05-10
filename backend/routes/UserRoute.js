const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserControllers');
const {protect} = require('../middleware/authMiddleware');

router.post('/users', UserController.handleCreateUser);
router.post('/login',  UserController.handleLoginUser);

module.exports = router;