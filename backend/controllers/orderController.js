const expressAsyncHandler = require("express-async-handler");
const db = require("../models");


module.exports.default = expressAsyncHandler(async (req, res) => {
    function makeId(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    if (req.body.orderItems.length === 0) {
        res.status(400).send({ message: 'Cart is empty' });
    } else {
        const currentTotalOrders = await db.orders.count();
        const order = await db.orders.create({
            idOrder: currentTotalOrders + 1,
            customerName: req.body.customerName,
            orderDate: req.body.orderDate,
            status: req.body.status,
            phoneNumber: req.body.phoneNumber,
            shippedDate: req.body.shippedDate,
            address: req.body.shipAddress,
            paymentMethod: req.body.paymentMethod,
            shippingPrice: req.body.shippingPrice,
            idUser: req.user.id,
        });
        const array = req.body.orderItems;
        array.forEach(async (element) => {
            await db.orderdetail.create({
                idOrder: order.idOrder,
                idProduct: element.product,
                priceEach: element.price,
                quantityOrder: element.qty,
                sizeProduct: element.size,
            })
            const productSizes = await db.productsizes.findOne({
                where: {
                    idSize: element.idsize,
                    idProduct: element.product,
                }
            })
            const qty = parseInt(element.qty);
            if (productSizes) {
                productSizes.quantityInStock = productSizes.quantityInStock - qty;
                productSizes.save()
            }
        });
        res.status(201).send({ message: 'New Order Created' });
    }
});

module.exports.mine = expressAsyncHandler(async (req, res) => {
    const orders = await db.orders.findAll({
        include: [{
            model: db.orderdetail
        }],
        where: {
            idUser: req.user.id
        },
    }
    )
    res.send(orders);
});

module.exports.details = expressAsyncHandler(async (req, res) => {
    const idOrder = req.query.idOrder;
    const idUser = req.query.idUser;
    const user = await db.users.findOne({
        where: {
            idUser: idUser,
        }
    })
    if (user.isAdmin) {
        const order = await db.orders.findOne({
            where: {
                idOrder: idOrder,
            },
            include: [{
                model: db.orderdetail,
                include: [{
                    model: db.products,
                    include: [{
                        model: db.productdetail,
                    }]
                }]
            }]
        });
        if (order) {
            res.send(order);
        } else {
            res.status(404).send({ message: 'Order Not Found' });
        }
    }
    else {
        const order = await db.orders.findOne({
            where: {
                idOrder: idOrder,
                idUser: idUser,
            },
            include: [{
                model: db.orderdetail,
                include: [{
                    model: db.products,
                    include: [{
                        model: db.productdetail,
                    }]
                }]
            }]
        });
        if (order) {
            res.send(order);
        } else {
            res.status(404).send({ message: 'Order Not Found' });
        }
    }
})