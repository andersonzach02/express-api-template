const winston = require('winston');

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
  stream: {
    write: (message) => {
      winstonLogger.http(message);
    },
  },
});

if (process.env.NODE_ENV !== 'production') {
  winstonLogger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
      colorize: true,
    }),
  );
}

module.exports = {
  logger: winstonLogger,
};
