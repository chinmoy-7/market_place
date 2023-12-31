const router = require("express").Router();
const path = require("path");
const User = require("../model/user");
const { upload } = require("../multer");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncError = require("../middleware/catchAsyncError")
const fs = require("fs");
const jwt = require("jsonwebtoken");
const sendMail = require("../utils/sendMail");
const sendToken = require("../utils/jwtToken");
const { isAuthenticated } = require("../middleware/Auth");

router.post("/create-user", upload.single("file"), async (req, res,next) => {
  try {
    const { name, email, password } = req.body;
    User;
    const userEmail = await User.findOne({ email });
    if (userEmail) {
      const filename = req.file.filename;
      const fileUrl = `uploads/${filename}`;
      fs.unlink(fileUrl, (err) => {
        if (err) {
          console.log(err);
          res.status(500).json({
            message: "Error deleting file",
          });
        }
      });
      return next(new ErrorHandler("User Already Exists", 400));
    }
    const filename = req.file.filename;
    const fileUrl = path.join(filename);

    const avatar = fileUrl;
    const user = {
      email: email,
      name: name,
      password: password,
      avatar: avatar,
    };

    const activationToken = await craeteActivationToken(user);
    const activationUrl=`http://localhost:3000/activation/${activationToken}`
    try{
        await sendMail({
            email:user.email,
            subject:"Activate your account",
            message:`Hello ${user.name}, please click on the link to activate your account:${activationUrl}`
        })
    }catch(error){
        return next (new ErrorHandler(error.message),400)
    }
    res.status(201).json({
      success: true,
      message:`Please check your email: ${user.email} to activate your account`,
    });
  } catch (err) {
    return next (new ErrorHandler(err.message),400)
  }
});

const craeteActivationToken = async (user) => {
  return await jwt.sign(user, process.env.ACTIVATION_SECRET, {
    expiresIn: "5d",
  });
};

//activate user
router.post("/activation",catchAsyncError(async(req,res,next)=>{
    try {
        const {activation_token}=req.body

        const newUser = await jwt.verify(activation_token,process.env.ACTIVATION_SECRET)
        if(!newUser){
            return next (new ErrorHandler("Invalid Token",400))
        }
        const {name,email,password,avatar}=newUser;
        let user = await User.findOne({email})

        if(user){
            return next (new ErrorHandler("User already exists",403))
        }
        user=await User.create({
            name:name,
            email:email,
            password:password,
            avatar:avatar
        })
        // return
        sendToken(user,201,res)
    } catch (error) {
        return next (new ErrorHandler(error.message,500))
    }
}))



//login user
router.post("/login-user",catchAsyncError(async(req,res,next)=>{
    try {
        const {email,password}= req.body;
        if(!email||!password){
            return next (new ErrorHandler("Please provide all the fields",400))
        }
        const user = await User.findOne({email}).select("+password")
        if(!user){
            return next (new ErrorHandler("User doesn't exists",400))
        }
        const isPasswordValid=await user.comparePassword(password);
        if(!isPasswordValid){
            return next (new ErrorHandler("Please provide the correct credentials",400))
        }

        sendToken(user,201,res)
    } catch (error) {
        return next (new ErrorHandler(error.message,500))
    }
}))


//load user
router.get("/get-user",isAuthenticated,catchAsyncError(async(req,res,next)=>{
    try {
        const user  = await User.findById(req.user.id);
        if(!user){
        return next (new ErrorHandler("User doesn't exists",400))
        }
        res.status(200).json({
            success:true,
            user
        })
    } catch (error) {
        return next (new ErrorHandler(error.message,500))
    }
}))

//Logout User
router.get("/logout",isAuthenticated,catchAsyncError(async(req,res,next)=>{
  try {
    res.cookie("token",null,{
      expires:new Date(Date.now()),
      httpOnly:true
    })

    res.status(201).json({
      success:true,
      message:"Logout Successful"
    })
  } catch (error) {
    return next (new ErrorHandler(error.message,500))
  }
}))
module.exports = router;
