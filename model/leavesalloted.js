const { number } = require('@hapi/joi');
const mongoose = require('mongoose');

const LeavesSchema = new mongoose.Schema({
    
    employeeId:{
        type:String,
        required:true,
        min:5,
        max :20
    },
    sickLeave:{
        type:Number,
        require:true,
        max:10,
        min:2
    },
    annualLeave:{
        type:Number,
        require:true,
        min:2,
        max:10
    },
    compensatoryLeave:{
        type:Number,
        require:true,
        max:10
    },
    casualLeave:{
        type:Number,
        require:true,
        max:10,
        min:2
    },
    leavesAllotedStatus:{
        type:Boolean,
        type:required
    }

});
module.exports = mongoose.model('Leaves',LeavesSchema);