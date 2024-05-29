const router = require('express').Router();
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const authMiddleware = require('../middlewars/authMiddleware')

router.post('/register', async(req,res)=>{
  try {
    const userExist= await User.findOne({email: req.body.email});
    if(userExist){
        return res.send({
            success: false,
            message: 'user already exist',
        })
    }
   
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password , salt);
    req.body.password = hashPassword; 
    const newUser = await User.create(req.body);
    newUser.save();
    res.send({
        success:true,
        message: "user created Successfully"
    })

  } catch (error) {
    console.log(error);
  }

})

router.post('/login' , async (req,res)=>{
  try {
    const user = await User.findOne({email: req.body.email});
    if(!user){
      return res.send({
        success:false,
        message: "user doesn't Exist",
      })
    }
     const validatePassword = await bcrypt.compare(req.body.password , user.password);
     if(!validatePassword){
      return res.send({
        success:false,
        message:"invalid user credentials"
      })
     }
     const token = jwt.sign({userId:user._id , name : user.name , email: user.email , role: user.isAdmin } , process.env.secret_key_jwt , {expiresIn: '365d'})
     res.send({
      success:true,
      message:"user logged in",
      token: token
     })

  } catch (error) {
    console.log(error);
  }
})

router.get('/get-current-user' , authMiddleware , async(req, res)=>{
  const user =  await User.findById(req.body.userId).select('-password');
  res.send({
    success:true,
    message:"you are allowed to access protected roure",
    data : user
  })
  
})



module.exports = router;