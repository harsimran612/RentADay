const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const path = require("path");
const User = require("./models/userModel");
const generateToken = require('./config/generateToken');
var cors = require('cors')

dotenv.config();
connectDB();
const app = express();
app.use(express.json());


app.use(cors()) // Use this after the variable declaration
// app.get('/',(req,res)=>{
//     res.send('asd');
// });


// app.post('/api/user',userRoutes);
app.post('/api/user', async function (req, res) {
    const {name,email,password} = req.body;
    if(!name || !email ||!password){
        res.status(400);
        throw new Error("Please enter all fields")
    }

    User.findOne({email}).then(result => {
        if(result) {
            res.status(400);
            throw new Error("user already Exists");
        } 
      })
      .catch(err => console.error(`Failed to find document: ${err}`));
    
    User.create({
        name,
        email,
        password,
    }).then(result => {
        console.log(result)

        if(result) {
            res.status(200);
            console.log('hjsad')
            res.send("hii")
        } 
      })
      .catch(err => console.error(`Failed to find document: ${err}`));

});




const __dirname1 = path.resolve();

const PORT = process.env.PORT || 8080
app.listen(8080, console.log("Server started onn PORT 8080"));