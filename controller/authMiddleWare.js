const jwt = require("jsonwebtoken")

const authMiddleware = async(req,res,next)=>{
try {
        const token  = req.headers["authorization"]
        const splittedToken = token.split(" ")[1]
        if (!splittedToken) res.send("no token");
        const decodedtoken = jwt.verify(
            splittedToken,
            process.env.JWT_SECRET
        );
        if(decodedtoken) {
            next()
        }
} catch (error) {
    res.send("invalid token");
}

}
module.exports = authMiddleware
