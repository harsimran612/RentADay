const express = require("express");
const dotenv = require("dotenv");

const connectDB = require("./storage/db");
const log = require("./log");
const {notFound,errorHandler} = require('./middlewares/errorMiddleware');
const appRouter = require("./router");

var cors = require('cors');
const path = require("path")

dotenv.config();
connectDB();
const app = express();

app.use(express.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// app.use(cors()) // Use this after the variable declaration

app.use(appRouter);
app.use(notFound);
app.use(errorHandler);

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'build')))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + 'build', 'index.html'))
})


// process.on('unhandledRejection', (reason, promise) => {
//   console.log(reason)
// });

// process.on('uncaughtException', (reason) => {
//   console.log(reason)
// });

// process.on('SIGTERM', signal => {
//   console.log(`Process ${process.pid} received a SIGTERM signal`)
//   process.exit(0)
// });

// process.on('SIGINT', signal => {
//   console.log(`Process ${process.pid} has been interrupted`)
//   process.exit(0)
// });

const PORT = process.env.PORT || 8080
app.listen(8080, function(){
  log.info("Server started on PORT:"+PORT)
});
