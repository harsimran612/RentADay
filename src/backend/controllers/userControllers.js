const asyncHandler = require("express-async-handler");
const { status } = require("express/lib/response");
const res = require("express/lib/response");
const User = require('../models/userModel');
const router = require("../routes/userRoutes");
const generateToken = require('../config/generateToken');

const registerUser = asyncHandler (async()=>{
    const {name,phone,email,password} = req.body;
    if(!name || !email || !phone ||!password){
        res.status(400);
        throw new Error("Please enter all fields")
    }

    const userExists = await User.findOne({email});

    if(userExists){
        res,status(400);
        throw new Error("user already Exists");
    }

    const user = await User.create({
        name,
        phone,
        email,
        password,
    });
    if(user){
        res.status(201).json({
            _id:user._id,
            name:user.name,
            phone:user.phone,
            email:user.email,
            token:generateToken(user._id),

        })
    }else{
        res.status(400);
        throw new Error("Failed to create new user ")
    }
});


const authUser = asyncHandler(async (req,res)=>{
     const {email,password} = req.body;
     const user = await User.findOne({email});
     if(user && (await User.matchPassword(password))){
        res.json({
            _id:user._id,
            name:user.name,
            phone:user.phone,
            email:user.email,
            token:generateToken(user._id),
        })
     }else{
        res.status(400);
        throw new Error("Failed to create new user ")
    }
})
module.exports = {registerUser,authUser};