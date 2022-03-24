const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const path = require("path");


dotenv.config();
connectDB();
const app = express();
app.use(express.json());

// app.get('/',(req,res)=>{
//     res.send('asd');
// });


app.use('/api/user',userRoutes);


const __dirname1 = path.resolve();

const PORT = process.env.PORT || 8080
app.listen(8080, console.log("Server started onn PORT 8080"));