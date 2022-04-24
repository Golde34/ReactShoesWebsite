const express = require('express')
const app = express();
const port = 4000;
const mysql = require('mysql');
const data = require('./data');
const db = require('./models');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

app.get('/', (req, res) => {
    res.send('Hello world');
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

//router product
const productRouter = require("./routers/productRouter");
app.use('/api/products', productRouter);

//router user
const accountRouter = require("./routers/accountRouter");
app.use('/api/users', accountRouter);
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
  });

//router order
const orderRouter = require("./routers/orderRouter");
app.use('/api/orders', orderRouter)

//service Router
const searchRouter = require("./routers/searchRouter");
app.use('/api/search', searchRouter);

const uploadRouter = require('./routers/uploadRouter');
app.use('/api/uploads', uploadRouter);

//connect port
db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    });
});