const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:6
    },
    email:{
        type:String,
        required:true,
        min:8,
        max:256
    },
    password:{
        type:String,
        required:true,
        min:6
    },
    age:{
        type:Number,
        required:true,
        min:1,
    
    },
    employeeId:{
        type:String,
        required:true,
        min:5,
        max :20
    },
    gender:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    employeeType:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    userRole:{
        type:String,
        required:true
    }
});
module.exports = mongoose.model('User',UserSchema);