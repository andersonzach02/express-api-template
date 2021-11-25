require('dotenv').config();
const express = require('express');
const winston = require('winston');
const morgan = require('morgan');

const winstonLogger = winston.createLogger({
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
  winstonLogger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
      colorize: true,
    }),
  );
}

winstonLogger.stream = {
  write(message) {
    winstonLogger.info(message);
  },
};

const app = express();
app.use(morgan('combined', { stream: winstonLogger.stream }));

app.get('/', (req, res) => {
  res.send({ message: 'Hello World! 👋🌍' });
});

app.listen(process.env.PORT, () => {
  winstonLogger.info(
    `Server is now listening on http://localhost:${process.env.PORT}`,
  );
});
