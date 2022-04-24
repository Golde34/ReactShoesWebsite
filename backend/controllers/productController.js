const db = require('../models');
const expressAsyncHandler = require('express-async-handler');
const data = require('../dataimport')
const { search } = require('../routers/uploadRouter');


module.exports.productdetail = expressAsyncHandler(async (req, res) => {
    const product = await db.products.findOne({
        include: [{
            model: db.productdetail
        },
        {
            model: db.productsizes
        },
        {
            model: db.categories
        },
        {
            model: db.brands
        }],
        where: {
            idProduct: req.params.id
        }
    })
    if (product) {
        res.send(product)
    } else {
        res.status(404).send({ message: 'Product not found' });
    }
});


module.exports.products = expressAsyncHandler(async (req, res) => {
    const limit = 10;
    const search = req.query.search || '';
    const page = req.query.page >= 0 ? req.query.page : 0;
    const offset = page ? parseInt(page * limit) : 0;
    const products = await db.products.findAll({
        include: [
            {
                model: db.productdetail,
                offset: 0,
                limit: 1,
            }, {
                model: db.brands,
            },
            {
                model: db.categories,
            },

        ],
        offset: offset,
        limit: limit,
    })
    const pages = await db.products.count();
    const totalPages = Math.ceil(pages / limit);
    res.send({ products, totalPages });
});


module.exports.postProducts = expressAsyncHandler(async (req, res) => {
    const createc = await db.categories.bulkCreate(data.categories);
    const createb = await db.brands.bulkCreate(data.brands);
    const createpd = await db.productdetail.bulkCreate(data.productdetail);
    const createp = await db.products.bulkCreate(data.products);
    const createps = await db.productsizes.bulkCreate(data.productsizes);
    // res.send({createc, createb, createpd, createp, createps});
    res.send({ createc, createb, createp, createpd });
});