const Admin = require('../models/admin')
const jwt = require('jsonwebtoken')

const handleLogin = async (req, res)=>{
    const {username, password} = req.body;
    if (!username || !password) return res.status(400).json({
        'message':'Username and Password are required.'
    });
    const admin =  await Admin.findOne({username:username}).exec();
    
    if (!admin) return res.sendStatus(401); //unauthoroized 
    //evaluate password 
    const match = (password === admin.password) ? true : false
    if (match){        
        res.json({
            username,
        })
    }
    else{
        res.sendStatus(401);
    }
    

}

module.exports = {handleLogin};