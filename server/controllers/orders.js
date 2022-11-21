const mongoose = require('mongoose');
const Order = require("../models/orders");
const User = require("../models/user");

const all = async (req, res) => {
  const orders = await Order.find().populate("user");
  res.send({
    error: false,
    message: "All orders from the database",
    orders: orders,
  });
};

const byId = async (req, res) => {
  const orders = await Order.findById(req.params.id);

  res.send({
    error: false,
    message: `Order with id #${orders._id}, has been fetched`,
    orders: orders,
  });
};

const create = async (req, res) => {
//   req.body.image = `images/${req.file.filename}`;
  const order = await Order.create({
    ...req.body,
  });

  await User.findByIdAndUpdate(req.body.user, {
    $push: { orders: order._id },
  });

  res.send({
    error: false,
    message: "New order has been created",
    order: order,
  });
};

const myOrders = async (req, res) => {
  const user = req.body.user;
  let orders = await Order.find({ user: user });

  res.send({
    error: false,
    orders: orders,
  });
};

module.exports = {
  all,
  byId,
  create,
  myOrders
};