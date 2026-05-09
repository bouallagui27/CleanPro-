const User = require('../models/User');
const bcrypt = require('bcrypt');

const createUser = async (data) => {
    // 1. نصنعو "الكمية متاع الملح" (Salt) باش التشفير يكون قوي
    const salt = await bcrypt.genSalt(10);
    
    // 2. نشفرو المودباس اللي جاي من الـ Frontend
    const hashedPassword = await bcrypt.hash(data.password, salt);
    
    // 3. نعوضو المودباس العادي بالمشفر قبل ما نصبه في الـ DB
    const newUser = await User.create({
        ...data,
        password: hashedPassword
    });

    // نرجعوا البيانات من غير مودباس للـ Frontend
    const { password, ...userWithoutPassword } = newUser.toJSON();
    return userWithoutPassword;
}

module.exports = { createUser };