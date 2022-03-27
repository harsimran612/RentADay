const mongoose = require("mongoose");


const listingSchema = mongoose.Schema({
    siteImg: {type:String, required:true},
    title: {type:String, required:true},
    category: {type:String, required:true},
    condition: {type:String},
    description: {type:String, required:true},
    address: {type:String, required:true},
    date:{type:String, require:true},
    time: {type:String, required: true},
    price: {type:Number, required:true},
    phoneNumber: {type:String, required:true},
    email: {type:String, required:true}
});

const Listing = mongoose.model("listing", listingSchema);

module.exports = Listing;