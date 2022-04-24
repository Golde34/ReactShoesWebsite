const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const productdetail = sequelize.define('productdetail', {
        idImage: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        }, 
        idProduct: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        image:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        tableName: 'productdetail',
        createdAt: false,
        updatedAt: false
    });
    return productdetail;
}