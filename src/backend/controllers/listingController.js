const asyncHandler = require("express-async-handler");

const Listing = require("../models/listingModel");
const {uploadFile} = require("../storage/firebase");
const log = require("../log");

const addNewListing = asyncHandler(async (req, res) => {
    uploadFile(req.file, async function(err, downloadUrl){
        if (err) {
            return res.status(500).json({
                'success': false,
                'message': "Something went wrong!",
                'data': null
            })
        }
        req.body.siteImg = downloadUrl;
        const listing = await Listing.create(req.body);
        if(listing){
            // return res.json({
            //     _id: listing._id
            // });
            return res.json({
                'success': true,
                'message': 'Listing added successfully',
                'data': {
                    '_id': listing._id
                }
            })
        }
        return res.status(400).json({
            'success': false,
            'message': 'Failed to add new listing',
            'data': null
        })
    });
    
});


const getListings = asyncHandler(async (req, res)=>{
    let searchQuery = {};
    
    if(req.query && (req.query.startingPrice || req.query.endingPrice)){
        let priceFilter = {};
        if(req.query.startingPrice){
            priceFilter["$gte"] = req.query.startingPrice;
        }
        if(req.query.endingPrice){
            priceFilter["$lte"] = req.query.endingPrice;
        }
        searchQuery["price"] = priceFilter;
    }
    const listings = await Listing.find(searchQuery);
    let listingsArray = listings.map(function(listing){
        return listing.toObject()
    });
    log.info(`Fetched listings = ${listingsArray}`);
    return res.json({"listings": listingsArray})
});

module.exports = {addNewListing, getListings};
