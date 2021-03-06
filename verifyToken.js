const jwt = require('jsonwebtoken');

module.exports =  function  (req,res,next) {
    const authbearer = req.headers['authorization'].split(' ');
    const token = authbearer[1];
    if(!token){
        return res.status(401).send('Acess denied');
    }

    try{
        const verified= jwt.verify(token,process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    }
    catch(err){
        res.status(400).send("Invalid Token");
    }
}
//comment