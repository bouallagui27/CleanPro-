const { Sequelize } = require('sequelize');
require('dotenv').config();

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
    dialect: 'mariadb',
    logging: false,
    
    // 👇 زِيد الجزء هذا بالظبط هنا 👇
    dialectOptions: {
        connectTimeout: 60000, // زيادة وقت الانتظار لتفادي الـ Timeout
        allowPublicKeyRetrieval: true, // هذي تنحي الخطأ اللي طلعلك
        ssl: {
            rejectUnauthorized: false // هذي تسمح بالاتصال الآمن بسيرفر Railway
        }
    },
    
    define: {
        timestamps: true
    }
});

const connectdb = async () => {
    try {
        await db.authenticate();
        console.log('✅ Connected successfully to Railway MySQL!');
    } catch (err) {
        console.error('❌ Connection failed:', err.message);
    }
};

module.exports = { db, connectdb };