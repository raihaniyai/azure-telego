const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const { client } = require('./index');
const middlewares = require('./middlewares');
const api = require('./api');

const category = require('./feature/category');
const service = require('./feature/service');
const company = require('./feature/company');
const product = require('./feature/product');
const { postOrder, getOrder } = require('./feature/order');
const { updateBalance, getUserDetails } = require('./feature/user');
const { gacha } = require('./feature/gacha');
const { getMyCoupon, getCouponPlan } = require('./feature/coupon');
const { getNews } = require('./feature/news');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

// Features
app.get('/category', (req, res) => category(req, res, client));
app.get('/:service/service', (req, res) => service(req, res, client));
app.get('/:company/company', (req, res) => company(req, res, client));
app.get('/:product/product', (req, res) => product(req, res, client));

app.get('/:userID/order', (req, res) => getOrder(req, res, client));
app.post('/:userID/order', (req, res) => postOrder(req, res, client));
app.get('/:userID/user', (req, res) => getUserDetails(req, res, client));
app.post('/:userID/user', (req, res) => updateBalance(req, res, client));
app.get('/:userID/my_coupon', (req, res) => getMyCoupon(req, res, client));
app.get('/:userID/:planID/coupon_plan', (req, res) => getCouponPlan(req, res, client));
app.post('/:userID/gacha', (req, res) => gacha(req, res, client));

app.get('/:searchQueryParams/news', (req, res) => getNews(req, res, client));

app.get('/', (req, res) => {
  res.json({
    status: res.statusCode,
    success: true,
    data: 'Welcome to the Netxis API'
  });
});

app.use('/api', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
