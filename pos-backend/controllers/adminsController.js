const Admin = require('../models/admin')

const addAdmin = async (req, res) => {

    const newAdmin = new Admin();
    newAdmin.username = req.body.username;
    newAdmin.password =  req.body.password;
    await newAdmin.save();
    res.send("Added Successfully");
}

module.exports = {addAdmin};