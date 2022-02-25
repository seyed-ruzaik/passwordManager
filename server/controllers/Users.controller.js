const User = require("../services/Users.service");


const getUserController = async (req, res) => {
    try {
        await (User.getUsers(req, res));// get users function
    } catch (error) {
        res.status(400).send({error: error.message, timestamp: new Date()});//error message
    }
}

  const registerController = async (req, res) => {
    try {
        await (User.addUser(req, res));// register function
    } catch (error) {
        res.status(400).send({error: error.message, timestamp: new Date()});//error message
    }
}

module.exports = { getUserController, registerController }