
const jwt = require("jsonwebtoken");
const UserModel = require('../models/UserModel');

const registerUser = async (req,res) => {
    try {
        const {name,email,password,city,phone} = req.body;

        if(!name || !email || !password || !city || !phone){
            return res.status(500).send({
                success : false,
                message : "All field is required!"
            })
        }

        let user = await UserModel.create({
            name:name,
            email:email,
            password:password,
            city:city,
            phone:phone
        })
        return res.status(200).send({
            success : true,
            message : "user Register succesfully",
            user
        })
    } catch (err) { 
        return res.status(501).send({
            success : false,
            err : err
        })
    }
}

const loginUser = async (req,res) => {
    try {
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(500).send({
                success : false,
                message : "All field is required!"
            })
        }

        let user = await UserModel.findOne({email:email});
        if(!user || user.password != password){
            return res.status(500).send({
                success : false,
                message : "Email And Password does not match!!"
            })
        }
        let token = jwt.sign({payload:user},"krishn",{expiresIn:'1hr'});

        return res.status(200).send({
            success : true,
            token : token
        })
    } catch (err) {
        return res.status(501).send({
            success : false,
            err : err
        })
    }
};

module.exports = {registerUser , loginUser}
