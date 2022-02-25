const express = require('express');
const app = express();

const database = require("./models");
app.use(express.json())


//Routes
const userRoutes = require("./routes/Users.routes");
const passwordRoutes = require("./routes/Passwords.routes");

app.use("/user",userRoutes);
app.use("/passwords", passwordRoutes);

database.sequelize.sync().then(()=>{
    app.listen(3001, ()=>{
        console.log('Server is running on port 3001');
    })
})
