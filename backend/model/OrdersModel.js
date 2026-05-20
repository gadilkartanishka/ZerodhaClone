const mongoose = require("mongoose");
const { OrdersSchema } = require("../schemas/OrdersSchema");

const OrderModel = mongoose.model("Orders", OrdersSchema);

module.exports = { OrderModel };
