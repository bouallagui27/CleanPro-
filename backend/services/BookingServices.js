const Booking = require('../models/booking');

const createBooking = async (data) => {
    return await Booking.create(data);
}
module.exports={createBooking}