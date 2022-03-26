const asyncHandler = require("express-async-handler");

const Listing = require("../models/listingModel");

const addNewListing =  asyncHandler(async (req, res)=>{
    const listing = await Listing.create(req.body);
    if(listing){
        return res.json({
            _id: listing._id
        })
    }
    throw new Error("Failed to create new listing");
});


const getListings = asyncHandler((req, res)=>{

});

module.exports = {addNewListing, getListings};
