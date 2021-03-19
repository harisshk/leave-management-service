const router = require('express').Router();
const User = require('../model/user');
const {registerValidation, loginValidation} =require('../validation');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



router.post('/register',async (req,res)=>{

    //Validate before converting into user
   const {error} = registerValidation(req.body);
   if(error){
       return res.status(400).send(error.details[0].message);
   }

   //Checks the email is already added.
   const emailExist = await User.findOne({email:req.body.email});
   if (emailExist){
       return res.status(400).send("Email is already added");
   }

   const salt = await bcrypt.genSalt(10);
   const hashPassword = await bcrypt.hash(req.body.password, salt);
   
    // res.send(error)
    const user= new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword,
        age:req.body.age,
        employeeId:req.body.employeeId,
        employeeType:req.body.employeeType,
        phoneNumber:req.body.phoneNumber,
        gender:req.body.gender,
        address:req.body.address,
        userRole:"user_employee",        
    });
   
    try{
        
        const savedUser = await user.save();
        res.send({"userId":user._id,"employeeId":user.employeeId});
    }
    catch(err){ 
        res.status(400).send(err);
    }
});


router.post('/login', async (req,res)=> {
    const {error} = loginValidation(req.body);
    if(error){
        return res.status(400).send(error.details[0].message);
    }
    //checking mail
    const username = await User.findOne({email:req.body.email});
    if (!username){
        return res.status(400).send("Email doesn't exist");
    }
    const validatePassword = await bcrypt.compare(req.body.password,username.password);
    if(!validatePassword){
        return res.status(400).send("Invalid password");
    }
    const id= username._id
    //Creating a token
    const token = jwt.sign({_id:id,userRole:username.userRole},process.env.TOKEN_SECRET,
        {
            expiresIn:process.env.TOKEN_EXPIRE
        });
    res.header('auth-token',token).send(JSON.stringify({'token':token}));
});
module.exports=router;