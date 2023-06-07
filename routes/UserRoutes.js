const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const Otp = require("../models/UserOTP");
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

router.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  const newUser = new User({ name, email, password });
  try {
    newUser.save();
    res.status(200).json({
      success: true,
      message: "Register success",
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (user) {
      const currentUser = {
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        _id: user._id,
      };
      res.status(200).send(currentUser);
    } else {
      res.status(400).json({
        message: "Login Failed",
      });
    }
  } catch (error) {
    res.status(404).json({
      message: "Something Went wrong",
    });
  }
});





router.get("/getallusers", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (error) {
    res.status(404).json({ message: error.stack });
  }
});

router.get("/getall", async (req, res) => {
  res.send("Hello From Node Server via nodemon");
});

router.post("/deleteuser", async (req, res) => {
  const userid = req.body.userid;
  try {
    await User.findOneAndDelete({ _id: userid });
    res.status(200).send("User Deleted");
  } catch (error) {
    res.status(404).json({ message: error.stack });
  }
});


//nodemailer configuration
// Nodemailer configuration
const transporter = nodemailer.createTransport(
  smtpTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "raj.yaduvanshi205@gmail.com",
      pass: "cegymsijskcummlv", 
    },
  })
);


//forgot password
// router.post("/forgotpassword", async (req, res) => {
//   const { email } = req.body;
//   const response = {};

//   try {
//     const user = await User.findOne({ email });

//     if (user) {
//       const otpCode = Math.floor(100000 + Math.random() * 900000);
//       const OTPData = new Otp({
//         email,
//         code: otpCode,
//         expiredIn: new Date().getTime() + 300 * 1000,
//       });

//       await OTPData.save();

//       response.statusText = "success";
//       response.message = "OTP sent to your email";
//     } else {
//       response.statusText = "error";
//       response.message = "Invalid email address";
//     }

//     res.status(200).json(response);
//   } catch (error) {
//     res.status(500).json({
//       message: "Something went wrong",
//     });
//   }
// });
router.post("/forgotpassword", async (req, res) => {
  const { email } = req.body;
  const response = {};

  try {
    const user = await User.findOne({ email });

    if (user) {
      const otpCode = Math.floor(100000 + Math.random() * 900000);
      const OTPData = new Otp({
        email,
        code: otpCode,
        expiredIn: new Date().getTime() + 300 * 1000,
      });

      await OTPData.save();

      response.statusText = "success";
      response.message = "OTP sent to your email";

      // Sending OTP to the user's email
      const mailOptions = {
        from: "your-email@gmail.com",
        to: email,
        subject: "OTP for Password Reset",
        html: `
          <div style="background-color: #f7f7f7; padding: 20px;">
            <h2 style="text-align: center; color: #333;">Password Reset OTP</h2>
            <p style="font-size: 16px;">Dear ${user.name},</p>
            <p style="font-size: 16px;">You have requested to reset your password. Please use the OTP below to proceed with the password reset:</p>
            <div style="background-color: #fff; padding: 20px; border: 1px solid #ccc; border-radius: 5px;">
              <h3 style="text-align: center; color: #333; margin-bottom: 20px;">OTP: ${otpCode}</h3>
              <p style="font-size: 16px;">Please enter this OTP in the appropriate field to complete the password reset process.</p>
              <p style="font-size: 16px;">Note: This OTP will expire in 5 minutes.</p>
            </div>
            <p style="font-size: 16px; margin-top: 20px;">If you did not request a password reset, please ignore this email. Your account is safe and no changes will be made.</p>
            <p style="font-size: 16px; margin-top: 20px;">Thank you,</p>
            <p style="font-size: 16px;">PizzaKing Team</p>
          </div>
        `,
      };
      

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log("Error: ", error);
        } else {
          console.log("Email sent successfully!");
        }
      });
    } else {
      response.statusText = "error";
      response.message = "Invalid email address";
    }

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
});

//change password
router.post('/changepassword', async (req, res) => {
  const { email, otpCode, password } = req.body;
  const response = {};

  try {
    let userData = await User.findOne({ email });

    if (!userData) {
      const otpCode = Math.floor(100000 + Math.random() * 900000);
      const OTPData = new Otp({
        email,
        code: otpCode,
        expiredIn: new Date().getTime() + 300 * 1000,
      });

      await OTPData.save();
      
      response.statusText = 'success';
      response.message = 'OTP sent to your email for registration.';
      res.status(200).json(response);
    } else {
      let currentTime = new Date().getTime();
      let otpData = await Otp.findOne({ email, code: otpCode });

      if (otpData) {
        if (otpData.expiredIn < currentTime) {
          response.statusText = 'error';
          response.message = 'Token expired';
        } else {
          userData.password = password;
          await userData.save();

          response.statusText = 'success';
          response.message = 'Password changed successfully';
        }
      } else {
        response.statusText = 'error';
        response.message = 'Invalid OTP';
      }

      res.status(200).json(response);
    }
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong',
    });
  }
});







module.exports = router;