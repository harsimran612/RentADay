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

app.get('')

app.use('/api/user',userRoutes);

const __dirname1 = path.resolve();

app.use(express.static(path.join(__dirname1, "/frontend/public")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "frontend", "public", "index.html"))
  );

const PORT = process.env.PORT || 8080
app.listen(8080, console.log("Server started on PORT 8080"));