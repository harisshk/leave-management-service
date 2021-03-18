const router = require('express').Router();
const verify = require('../verifyToken');
const user = require('./../model/user');
router.get('/getAllEmployee', verify, async(req,res)=>{
   const emplyee= await (user.find({},  {_id:0,email:1,gender:1,address:1,phoneNumber:1,age:1,employeeId:1,employeeType:1, name: 1}));
   res.send(emplyee);

});
module.exports=router;