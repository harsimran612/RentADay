const asyncHandler = require("express-async-handler");

const Listing = require("../models/listingModel");
const {uploadFile} = require("../storage/firebase");

const addNewListing =  asyncHandler(async (req, res)=>{
    uploadFile(req.file, async function(err, downloadUrl){
        if(err){
            return res.status(500).json({"msg": err.toString()})
        }
        req.body.siteImg = downloadUrl;
        const listing = await Listing.create(req.body);
        if(listing){
            return res.json({
                _id: listing._id
            });
        }
        throw new Error("Failed to create new listing");
    });
    
});


const getListings = asyncHandler((req, res)=>{

});

module.exports = {addNewListing, getListings};
