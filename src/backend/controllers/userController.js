const asyncHandler = require("express-async-handler");
const generateToken = require('../config/generateToken');

const User = require('../models/userModel');

const registerUser = asyncHandler (async(req,res)=>{
    const {name,email,password} = req.body;
    const userExists = await User.findOne({email});

    if(userExists){
        // res.status(400);
        // throw new Error("user already Exists");
        return res.status(400).json({
            'success': false,
            'message': 'User already exists with this email',
            'data': null
        })
    }
    
    const user = await User.create({
        name,
        email,
        password,
    });
    if (user) {
        // res.status(201).json({
        //     _id:user._id,
        //     name:user.name,
        //     email:user.email,
        //     token:generateToken(user._id),
        // })
        res.status(201).json({
            'success': true,
            'message': 'User created successfully',
            'data': {
                '_id': user._id,
                'name': user.name,
                'email': user.email,
                'token': generateToken(user._id),
            }
        })
    } else {
        // res.status(400);
        // throw new Error("Failed to create new user ")
        res.status(400).json({
            'success': false,
            'message': 'Failed to create new user',
            'data': null
        })
    }
});


const authUser = asyncHandler(async (req,res)=>{
     const {email,password} = req.body;
     const user = await User.findOne({email});
     if(user && (await user.matchPassword(password))){
        // return res.json({
        //     _id:user._id,
        //     name:user.name,
        //     email:user.email,
        //     token:generateToken(user._id),
        // })
         return res.json({
             'success': true,
             'message': 'User authenticated successfully',
             'data': {
                 '_id': user._id,
                 'name': user.name,
                 'email': user.email,
                 'token': generateToken(user._id),
             }
         })
     }else {
        // return res.status(400).json({"error": "Please ensure you have provided valid user credentials"});
         return res.status(400).json({
             'success': false,
             'message': 'Email or password is incorrect!',
             'data': null
         })
    }
})

module.exports = {registerUser,authUser};