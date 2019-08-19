"use strict";

const Sequelize = require("sequelize");
const databaseInfo = require("../database.json");

const sequelize = new Sequelize("sequelize_transaction", databaseInfo.name, databaseInfo.password, { dialect: "mysql" });

module.exports = {
    database: sequelize,
    Sequelize: Sequelize
};