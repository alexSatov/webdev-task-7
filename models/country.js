'use strict';

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('country', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            unique: true
        }
    });
};
