"use strict";

import Sequelize from "sequelize";

const sequelize = new Sequelize(
    "mysql://root:root@localhost/sequelize_transaction",
    {
        operatorsAliases: false
    }
);

module.exports = {
    database: sequelize,
    Sequelize: Sequelize
};