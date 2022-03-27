const mongoose = require("mongoose");

const log = require("../log");
const {mongoConfig} = require("../config/config");

const connectDB = async()=>{
    try {
        const conn = await mongoose.connect(mongoConfig.connectionUri, {
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        log.info(`Mongo Connected:${conn.connection.host}`)
    }catch(error){
        console.log(`error:${error.message}`)
        process.exit();
    }
};

module.exports = connectDB;