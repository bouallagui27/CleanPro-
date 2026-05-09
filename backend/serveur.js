const express = require('express');
const cors = require('cors');
const { connectdb, db } = require('./config/database');

const User = require('./models/User');
const Booking = require('./models/Booking');
const bookingRoutes = require('./routes/BookingRoute');
const userRoutes = require('./routes/UserRoute');

// تعريف العلاقات
User.hasMany(Booking, { foreignKey: 'userId', onDelete: 'CASCADE' });
Booking.belongsTo(User, { foreignKey: 'userId' });

const app = express();
const port = 3000;

// 1. هذوما لازم يكونوا الفوق قبل الـ Routes
app.use(cors()); // باش يوافق على طلب الـ React
app.use(express.json()); // باش يترجم الـ Data اللي جاية م الـ Frontend

// 2. توة نحطو الـ Routes
app.use('/bookings', bookingRoutes); 
app.use('/users', userRoutes);
app.listen(port, async () => {
    try {
        await connectdb();
        // رجعها force: false بعد ما يتصنعوا الجداول أول مرة
        await db.sync({ force: false}); 
        console.log(`✅ Server running on http://localhost:${port} & Database synced!`);
    } catch (err) {
        console.error("❌ Error:", err.message);
    }
});