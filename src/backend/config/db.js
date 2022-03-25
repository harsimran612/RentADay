const mongoose = require("mongoose");

const connectDB = async()=>{
    try {
        const conn = await mongoose.connect(`mongodb+srv://jeriljames:jeriljames@first-cluster.mis1q.mongodb.net/RentADay?retryWrites=true&w=majority`, {
            useNewUrlParser:true,
            useUnifiedTopology:true
        });

        console.log(`Mongo Connected:${conn.connection.host}`)
    }catch(error){
        console.log(`error:${error.message}`)
        process.exit();
    }
};

module.exports = connectDB;