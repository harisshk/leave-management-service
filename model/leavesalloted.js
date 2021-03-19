const { number, object, required } = require('@hapi/joi');
const mongoose = require('mongoose');

const LeavesSchema = new mongoose.Schema({
    _id:{
        type:Object,
        required:true
    },
    employeeId:{
        type:String,
        required:true,
        min:5,
        max :20
    },
    sickLeaveAlloted:{
        type:Number,
        require:true,
        max:10,
        min:2
    },
    
    sickLeaveTaken:{
        type:Number,
        require:true,
        max:10,
        
    },
    annualLeaveAlloted:{
        type:Number,
        require:true,
        min:2,
        max:10
    },
    annualLeaveTaken:{
        type:Number,
        require:true,
        
        max:10
    },
    compensatoryLeaveAlloted:{
        type:Number,
        require:true,
        max:10
    },
    
    compensatoryLeaveTaken:{
        type:Number,
        require:true,
        max:10
    },
    casualLeaveAlloted:{
        type:Number,
        require:true,
        max:10,
        
    },
    
    casualLeaveTaken:{
        type:Number,
        require:true,
        max:10,
        
    }

});
module.exports = mongoose.model('Leaves',LeavesSchema);