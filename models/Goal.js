const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Goal = sequelize.define('Goal', {
    goal_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    target_amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    saved_amount: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0
    }
});

module.exports = Goal;
