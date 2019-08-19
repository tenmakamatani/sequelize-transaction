"use strict";

const Sequelize = require("sequelize");
const sequelize = new Sequelize("sequelize_transaction", process.argv[2], process.argv[3], { dialect: "mysql" });

// テーブルの定義
const User = sequelize.define("users", {
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

const Product = sequelize.define("products", {
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

// モデルをテーブルと同期させる
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
