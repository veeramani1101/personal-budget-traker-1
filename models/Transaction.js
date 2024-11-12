const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Transaction = sequelize.define('Transaction', {
    amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    transaction_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    description: DataTypes.TEXT
});

module.exports = Transaction;
