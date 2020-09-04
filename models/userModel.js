const mongoose = require('mongoose');

const usreSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    email:{
        unique:true,
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    },

    
}, {timestamps:true})