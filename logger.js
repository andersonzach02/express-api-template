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
});
exports.winstonLogger = winstonLogger;
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

module.exports = winstonLogger;
