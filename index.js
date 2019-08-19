"use strict";

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
