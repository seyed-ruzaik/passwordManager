const {Users} = require('../models');
const bcrypt = require("bcrypt");
const {createNewToken} = require("../helpers/tokenGenerator");
const saltRounds = 10;


async function getUsers(req, res){
    try {
        const data = await Users.findAll({where:{}});
        res.status(200).send(data);
    }catch (error) {

    }
}
async function addUser(req, res){
    try {
        const data = req.body;
        const email = data.email.toString().toLowerCase();
        const password = data.password;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        await Users.create({email: email, password: hashedPassword});
        const token = createNewToken(Users);
        res.status(200).send({token: token});
    }catch (error) {
        res.status(400).send({message: error.message, timestamp: new Date()});
    }
}
async function login(req, res){
    try {

    }catch (error) {
        res.status(400).send({message: error.message, timestamp: new Date()});
    }
}
module.exports = { getUsers, addUser }