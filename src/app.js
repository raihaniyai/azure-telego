const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const { client } = require('./index');
const middlewares = require('./middlewares');
const api = require('./api');

const category = require('./feature/category');
const service = require('./feature/service');
const plan = require('./feature/plan');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

// Features
app.get('/category', (req, res) => category(req, res, client));
app.get('/:service/service', (req, res) => service(req, res, client));
app.get('/plan', (req, res) => plan(req, res, client));

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
