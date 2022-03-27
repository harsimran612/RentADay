const winston = require("winston");
const path = require("path");
const fs = require("fs");

const logDir = "logs";

if(!fs.existsSync(logDir)){
    fs.mkdirSync(logDir);
}

var logger = winston.createLogger({
    level: "info",
    format: winston.format.json(),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({
            name: "AppLogger",
            filename: path.resolve(path.normalize(path.join(logDir, "backend-app.log"))),
            maxsize: 100000,
      })
    ]
});
winston.add(logger)
module.exports = logger;