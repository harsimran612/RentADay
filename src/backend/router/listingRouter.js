const express = require("express");

const {addNewListing, getListings} = require("../controllers/listingController");

const router = express.Router();


router.post("/new", addNewListing);
router.get("/all", getListings);

module.exports = router;