"use strict";

const sequelize = require("./models/sequelize-loader").database;
const User = require("./models/user");
const Product = require("./models/product");

User.sync().then(() => {
    Product.belongsTo(User, { foreignKey: "boughtBy" });
    Product.sync().catch((err) => {
        console.log(err);
    });
}).catch((err) => {
    console.log(err);
});

// commit, rollback は自動
// Product.destroy と User.destroy の順番を逆にすると rollback の再現もできる
sequelize.transaction(async (tx) => {

    await User.upsert({
        userId: 1,
        userName: "user"
    }, { transaction: tx });

    await Product.upsert({
        productId: 1,
        productName: "product",
        boughtBy: 1
    }, { transaction: tx });

    await Product.destroy({
        where: {
            productId: 1
        },
        transaction: tx
    });

    await User.destroy({
        where: {
            userId: 1
        },
        transaction: tx
    });

});
