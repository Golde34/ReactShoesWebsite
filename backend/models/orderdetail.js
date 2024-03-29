const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const orderDetail = sequelize.define("orderdetail", {
        idOrder: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        idProduct: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            allowNull: false,
        },
        priceEach: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        quantityOrder: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        sizeProduct: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        tableName: 'orderdetail',
        createdAt: false,
        updatedAt: false,
    });
    return orderDetail;
}