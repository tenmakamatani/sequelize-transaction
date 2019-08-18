"use strict";

import { database, Sequelize } from "./sequelize-loader";

const User = database.define("users", {
    userId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    userName: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
        freezeTableName: true,
        timestamps: false
    });

module.exports = User;