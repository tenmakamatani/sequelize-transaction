"use strict";

const Sequelize = require("sequelize");

const sequelize = new Sequelize("sequelize_transaction", "root", "root", { dialect: "mysql" });

module.exports = {
    database: sequelize,
    Sequelize: Sequelize
};