require('dotenv').config();
const express = require('express');
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({
      filename: './logs/error.log',
      level: 'errors',
    }),
    new winston.transports.File({ filename: './logs/combined.log' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  );
}

const app = express();

app.get('/', (req, res) => {
  res.send(404);
});

app.listen(process.env.PORT, () => {
  logger.log(
    'info',
    `Server is now listening on http://localhost:${process.env.PORT}`,
  );
});
