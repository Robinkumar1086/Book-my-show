const jwt= require('jsonwebtoken');

function authMiddleware(req,res,next){
   try {
    const token = req.headers.authorization.split(' ')[1];
    const decode = jwt.verify(token,process.env.secret_key_jwt);
        req.body.userId = decode.userId;
        next();
   } catch (error) {
   res.send({
    success:false,
    message: "invalid token"
   })
   }
}

module.exports = authMiddleware;