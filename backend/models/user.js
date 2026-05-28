const { DataTypes } = require('sequelize');
const { db } = require('../config/database');
{/* all types */}
const User = db.define('user', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true, 
        allowNull: false,
        validate: {
            isEmail: true 
        }
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true 
});

module.exports = User;
