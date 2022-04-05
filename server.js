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

// Serve static files from the React frontend app
//if(process.env.NODE_ENV){
 // app.use(express.static('frontend/build'))

 // app.get('/*', (req, res) => {
 //   res.sendFile(path.resolve(__dirname + '/frontend/build', 'index.html'))
 // })
//}
// "heroku-postbuild": "cd frontend && npm install --only=dev && npm install && npm run build"

app.use(appRouter);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 8080
app.listen(PORT, function(){
  log.info("Server started on PORT:"+PORT)
});
