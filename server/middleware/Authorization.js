const passport = require('passport');


function authenticate(req, res, next) {
    passport.authenticate("jwt",{},function (err, user, jwtToken) {
        if (err) {
            return res.status(401).json({ status: "error", code: "unauthorized" });
        }
        if (!user) {
            return res.status(401).json({ status: "error", code: "unauthorized" });
        } else {
            req.user = user;
            return next();
        }
    })(req, res, next);
}
const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {

    let token = req.headers["authorization"];
    let arr = [];
    arr =  token.split("Bearer ");
    token = "" + arr[1];
    if(!token){
        res.send("Need a token!");
    }else{
        jwt.verify(token, "JWT_SECRET", (err, decoded) => {
            if (err){
               res.status(401).json({ status: "error", code: "unauthorized" });
            }else{
                req.userId = decoded.id;
                next();
            }
        });
    }

};
module.exports = { authenticate, verifyJWT }