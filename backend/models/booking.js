const {DataTypes} = require('sequelize');
const {db} = require('../config/database');
const Booking = db.define('booking',{
    area:{
    type: DataTypes.INTEGER,
    },
    city:{
    type: DataTypes.STRING,
    },
    date:{
    type: DataTypes.DATE,
    },
    time:{
    type: DataTypes.TIME,
    },
    service:{
    type: DataTypes.INTEGER,
    },
    room:{
    type: DataTypes.INTEGER,
    },
})
module.exports = Booking;