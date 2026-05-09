const bokkingServices = require('../services/BookingServices');
exports.handelcreatbooking = async (req, res) => {
    try{
        const booking = await bokkingServices.createBooking(req.body);
        res.status(201).json(booking);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}