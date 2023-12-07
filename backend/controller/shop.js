const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const sendMail = require("../utils/sendMail");
const sendToken = require("../utils/jwtToken");
const { isAuthenticated, isSeller } = require("../middleware/Auth");
const { upload } = require("../multer");
const Shop = require("../model/shop");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const sendShopToken = require("../utils/shopToken");

router.post("/create-shop", upload.single("file"), async(req, res, next) => {
  try {
    const { email } = req.body;
    const sellerEmail = await Shop.findOne({ email });
    if (sellerEmail) {
      const filename = req.file.filename
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
    const seller = {
      email: email,
      name: req.body.name,
      password: req.body.password,
      avatar: avatar,
      address: req.body.address,
      phoneNumber: req.body.phoneNumber,
      zipCode: req.body.zipCode,
    };
    const activationToken = await craeteActivationToken(seller);
    const activationUrl = `http://localhost:3000/seller/activation/${activationToken}`;
    try {
      await sendMail({
        email: seller.email,
        subject: "Activate your account",
        message: `Hello ${seller.name}, please click on the link to activate your Shop:${activationUrl}`,
      });
      res.status(201).json({
        success: true,
        message: `Please check your email: ${seller.email} to activate your account`,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message), 400);
    }
  } catch (error) {
    return next(new ErrorHandler(error.message), 400);
  }
});

//Create Activation Token
const craeteActivationToken = async (seller) => {
  return await jwt.sign(seller, process.env.ACTIVATION_SECRET, {
    expiresIn: "5d",
  });
};

//Shop Activation
router.post(
  "/activation",
  catchAsyncError(async (req, res, next) => {
    try {

      const { activation_token } = req.body;

      const newSeller = await jwt.verify(
        activation_token,
        process.env.ACTIVATION_SECRET
      );
      if (!newSeller) {
        return next(new ErrorHandler("Invalid Token", 400));
      }
      const { name, email, password, avatar, zipCode, address, phoneNumber } =
        newSeller;
      let seller = await Shop.findOne({ email });

      if (seller) {
        return next(new ErrorHandler("User already exists", 403));
      }

      seller = await Shop.create({
        name: name,
        email: email,
        password: password,
        avatar: avatar,
        zipCode,
        address,
        phoneNumber,
      });
      // return
      try {
        await sendMail({
          email: seller.email,
          subject: "Your Shop has been successfully created",
          message: `Hello ${seller.email}, Your Shop ${seller.name}  has been successfully created. Thank you for joining our family`,
        });
      } catch (error) {
        return next(new ErrorHandler(error.message), 400);
      }
      sendShopToken(user,201,res)
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);


//
router.post("/login-shop",catchAsyncError(async(req,res,next)=>{
  try {
      const {email,password}= req.body;
      if(!email||!password){
          return next (new ErrorHandler("Please provide all the fields",400))
      }
      const user = await Shop.findOne({email}).select("+password")
      if(!user){
          return next (new ErrorHandler("User doesn't exists",400))
      }
      const isPasswordValid=await user.comparePassword(password);
      if(!isPasswordValid){
          return next (new ErrorHandler("Please provide the correct credentials",400))
      }

      sendShopToken(user,201,res)
  } catch (error) {
      return next (new ErrorHandler(error.message,500))
  }
}))


//Load Shop
router.get("/get-seller",isSeller,catchAsyncError(async(req,res,next)=>{
  try {
      const seller  = await Shop.findById(req.seller.id);
      if(!seller){
      return next (new ErrorHandler("User doesn't exists",400))
      }
      res.status(200).json({
          success:true,
          seller
      })
  } catch (error) {
      return next (new ErrorHandler(error.message,500))
  }
}))
module.exports = router;
