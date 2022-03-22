const express = require("express");
const app = express();

const connected = require("./connection.js");

connected 
.then(()=>{
    console.log("connected!");
    const server = app.listen(8080, ()=>console.log("Listening"));
});

app.use(express.static("public"));

app.use(express.urlencoded({extended:true})); // parse form data

app.use(express.json()); // parse JSON requests made using axios

const router = require ("./routes/index.js");
app.use('/api', router);