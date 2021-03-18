const Joi = require('@hapi/joi');

const registerValidation = data =>{
    const schema = {
        name:Joi.string().min(3).required(),
        email:Joi.string().min(6).required().email(),
        password:Joi.string().min(6).required(),
        age:Joi.number().required().min(18),
        address:Joi.string().required(),
        employeeId:Joi.string().required(),
        employeeType:Joi.string().required(),
        gender:Joi.string().required().min(3).max(7),
        phoneNumber:Joi.string().required().length(10),
    };
    return Joi.validate(data,schema);
};

const loginValidation = data =>{
    const schema = {
        email:Joi.string().min(6).required().email(),
        password:Joi.string().min(6).required(),
    };
    return Joi.validate(data,schema);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;