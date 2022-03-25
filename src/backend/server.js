const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const path = require("path");
var cors = require('cors');

dotenv.config();
connectDB();
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// app.use(cors()) // Use this after the variable declaration

app.use(express.json());

// app.get('/',(req,res)=>{
//     res.send('asd');
// });

// app.get('')

app.post('/api/user',userRoutes);


const PORT = process.env.PORT || 8080
app.listen(8080, console.log("Server started on PORT 8080"));