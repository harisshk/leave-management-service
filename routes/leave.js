const router = require('express').Router();
const { json } = require('express');
const verify = require('../verifyToken');
const Leaves = require('./../model/leavesalloted')

router.post('/postLeave',async(req,res)=> {
   
    const rew=req.body;
   //Checks the 
    const leave = Leaves({
        _id:req.body._id,
        employeeId:req.body.employeeId,
        sickLeaveAlloted:req.body.sickLeaveAlloted,
        sickLeaveTaken:0,
        annualLeaveAlloted:req.body.annualLeaveAlloted,
        annualLeaveTaken:0,
        compensatoryLeaveAlloted:req.body.compensatoryLeaveAlloted,
        compensatoryLeaveTaken:0,
        casualLeaveAlloted:req.body.casualLeaveAlloted,
        casualLeaveTaken:0
    })
    try{
        
        const savedLeave = await leave.save();
        res.send({"leave":leave.employeeId});
    }
    catch(err){ 
        res.status(400).send(err);
    }
})

router.get('/getLeave/:id', verify, async(req,res)=>{
    const id=req.params.id
   const data = await( Leaves.findOne({_id:req.params.id},{_id:0,__v:0}))
    if(data){
        res.status(200).send(data);
    }
    else{
        res.status(404).send("No data");
    }
})


module.exports= router;