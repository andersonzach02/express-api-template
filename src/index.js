require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const { logger } = require('../logger');

const app = express();
app.use(morgan('combined', { stream: logger.stream.write }));
app.use(cors());
app.use(helmet());
app.use(express.json());

app.get('/', (req, res) => {
  res.send({ message: 'Hello World! 👋🌍' });
});

app.listen(process.env.PORT, () => {
  logger.info(
    `Server is now listening on http://localhost:${process.env.PORT}`,
  );
});
