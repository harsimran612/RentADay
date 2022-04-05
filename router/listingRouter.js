const express = require("express");
const multer = require("multer");

const {addNewListing, getListings} = require("../controllers/listingController");
const {newListingValidators} = require("../validations/listingValidation")
const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({storage: storage}).single('siteImg')


router.post("/new", upload, newListingValidators, addNewListing);
router.get("/all", getListings);

module.exports = router;