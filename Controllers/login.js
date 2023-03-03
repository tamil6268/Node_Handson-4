const jwt = require('jsonwebtoken');
const CONSTANTS = require('../config/ConstVarables');

const userLoginController = function(req,res){
    console.log("User logging in");
    const loginData = req.body;
    if(loginData.username && loginData.password){
        console.log("Recieved login data =>", loginData);
        const jwtToken = jwt.sign(loginData, CONSTANTS.SECRET_KEY);
        return res.status(200).send({"token": jwtToken});
    }
    else{
        return res.status(400).send({message:"Invalid credentials"});
    }
};

module.exports = {userLoginController};