require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connectdb, db } = require('./config/database');

const User = require('./models/user');
const Booking = require('./models/booking');
const bookingRoutes = require('./routes/BookingRoute');
const userRoutes = require('./routes/UserRoute');

User.hasMany(Booking, { foreignKey: 'userId', onDelete: 'CASCADE' });
Booking.belongsTo(User, { foreignKey: 'userId' });

const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); 
app.use(express.json()); 

app.use('/bookings', bookingRoutes); 
app.use('/users', userRoutes);
app.use('/login', userRoutes); 
app.listen(port, async () => {
    try {
        await connectdb();
        
        await db.sync({ force: false}); 
        console.log(`✅ Server running on http://localhost:${port} & Database synced!`);
    } catch (err) {
        console.error("❌ Error:", err.message);
    }
});