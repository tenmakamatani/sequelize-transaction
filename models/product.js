"use strict";

const loader = require('./sequelize-loader');
const Sequelize = loader.Sequelize;

const Product = loader.database.define("products", {
    productId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    productName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    boughtBy: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
        freezeTableName: true,
        timestamps: false,
        indexes: [
            {
                fields: ["boughtBy"]
            }
        ]
    });

module.exports = Product;