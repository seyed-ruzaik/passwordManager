const jwt = require('jsonwebtoken');

const createNewToken = (user) => {
    return jwt.sign(
        { email: user?.email },
        "JWT_SECRET",
        {
            expiresIn: "1y",
        }
    );
};
module.exports = { createNewToken }