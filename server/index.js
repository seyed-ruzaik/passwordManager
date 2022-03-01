const express = require('express');
const app = express();
require('dotenv').config();
const database = require("./models");
app.use(express.json())

app.get("/", (req, res)=>{
    res.status(200).send("Server is running");
})

//Routes
const userRoutes = require("./routes/Users.routes");
const passwordRoutes = require("./routes/Passwords.routes");

app.use("/user",userRoutes);
app.use("/passwords", passwordRoutes);

database.sequelize.sync().then(()=>{
    app.listen(process.env.DB_PORT,()=>{
        console.log('Server is running on port', process.env.DB_PORT);
    })
})
