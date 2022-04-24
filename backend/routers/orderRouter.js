const express = require("express");
const db = require('../models');
const orderRouter = express.Router();
const expressAsyncHandler = require('express-async-handler');
const { isAuth, isAdmin } = require('../utils');
const router = require("./searchRouter");
const sequelize = require('sequelize');
const orderController = require("../controllers/orderController");


orderRouter.post('/', isAuth, orderController.default);

orderRouter.get('/mine', isAuth, orderController.mine);

orderRouter.get(
  '/',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const limit = 10;
    const search = req.query.search || '';
    const page = req.query.page >= 0 ? req.query.page : 0;
    const offset = page ? parseInt(page * limit) : 0;
    const orders = await db.orders.findAll({
      include: [{
        model: db.orderdetail
      }, {
        model: db.users
      },
      ],
      offset: offset,
      limit: limit,
    });
    const pages = await db.orders.count();
    const totalPages = Math.ceil(pages / limit);
    res.send({ orders, totalPages });
  }));

orderRouter.put(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const today = new Date();
    const orderId = req.params.id
    dateShip = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate());
    const order = await db.orders.findOne({
      where: {
        idOrder: orderId
      }
    }
    )
    order.status = "Đã hoàn thành";
    order.shippedDate = dateShip;
    order.save();
    res.send(order)
  }));

orderRouter.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const order = await db.orders.findOne({
      where: {
        idOrder: req.params.id
      }
    })
    if (order) {
      const deleteOrder = await order.destroy();
      res.send({ message: 'Order Deleted', order: deleteOrder });
    } else {
      res.status(404).send({ message: 'Order Not Found' });
    }
  })
);


orderRouter.get('/detail', isAuth, orderController.details);

orderRouter.get("/plt",
  expressAsyncHandler(async (req, res) => {
    const count = await db.orders.findAll({
      attributes: ['orderDate', [sequelize.fn('COUNT', sequelize.col('orders.idOrder')), 'countOrder']],
      group: ["orders.orderDate"],
    })
    res.send(count);
  })
);


module.exports = orderRouter; 