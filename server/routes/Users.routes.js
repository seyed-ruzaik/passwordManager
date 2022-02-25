const UserControllers = require('../controllers/Users.controller');
const express = require('express');
const userRouter = express.Router();
const authentication = require('../middleware/Authorization');

userRouter.get('/getUsers',authentication.verifyJWT, async (req,res, next) =>{
    await UserControllers.getUserController(req,res);
});

userRouter.post('/add', async (req,res) =>{
    await UserControllers.registerController(req,res);
});

module.exports = userRouter;