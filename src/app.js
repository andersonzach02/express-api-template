require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const logger = require('../logger');
const middlewares = require('./middlewares');

const app = express();

app.use(morgan('combined', { stream: logger.stream.write }));
app.use(cors());
app.use(helmet());
app.use(express.json());

app.get('/', (req, res) => {
  res.send({ message: 'Hello World! 👋🌍' });
});

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
