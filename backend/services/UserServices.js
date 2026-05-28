const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const createUser = async (data) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(data.password, salt);
    
    const newUser = await User.create({
        ...data,
        password: hashedPassword
    });

    const { password, ...userWithoutPassword } = newUser.toJSON();
    return userWithoutPassword;
};

const loginUser = async (email, password) => {
    const user = await User.findOne({ where: { email: email } });
    
    if (!user) {
        throw new Error('email or password is incorrect');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('email or password is incorrect');
    }

    const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
    );

    const { password: hashedPassword, ...userWithoutPassword } = user.get({ plain: true });

    return {
        user: userWithoutPassword,
        token: token
    };
};

module.exports = { createUser, loginUser };