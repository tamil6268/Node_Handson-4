const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const CONSTANTS = require('../config/ConstVarables');

const userRegisterController = function(req,res){
    console.log("Registering the user");
    const userDetails = req.body;
    console.log("Recieved user details =>", userDetails);
    const password = userDetails.password;
    const roundsOfSalt = 10;
    bcrypt.genSalt(roundsOfSalt, function(err, salt){
        if(err){
            console.log(err);
        }
        else{
            bcrypt.hash(password, salt, function(err,hashedPassword){
                if(err){
                    console.log(err);
                }
                else{
                    console.log("User has registered successfully ")
                    res.send({"hashedPassword":hashedPassword})
                }
            })
        }
    })
};

module.exports = {userRegisterController};