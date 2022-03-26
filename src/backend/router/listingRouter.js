const express = require("express");

const {addNewListing, getListings} = require("../controllers/listingController");
const {newListingValidators} = require("../validations/listingValidation")
const router = express.Router();


router.post("/new", newListingValidators, addNewListing);
router.get("/all", getListings);

module.exports = router;