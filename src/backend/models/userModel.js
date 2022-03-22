const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');


const userSchema = mongoose.Schema({
    hostName: {type:String, required:true},
    phone:{type:Number,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
});
userSchema.methods.matchPassword = async function (enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}
userSchema.pre('save',async function(next){
    if(!this.modified){
        next()
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
})
const User = mongoose.model("user",userSchema);

module.exports = User;