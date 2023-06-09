
const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const Otp = require("../models/UserOTP");
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

// Nodemailer configuration
const transporter = nodemailer.createTransport(
  smtpTransport({
    service: "gmail",
    host: process.env.SMPT_HOST,
    port: process.env.SMPT_PORT,
    secure: true,
    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_PASSWORD, 
    },
  })
);


router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // Generate a unique verification token
    const verificationToken = crypto.randomBytes(20).toString("hex");

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      verificationToken,
    });
    await newUser.save();

    const mailOptions = {
      from: process.env.EMAIL_SENDER, // Retrieve the email sender from .env file
      to: email,
      subject: "Email Verification",
      html: `
        <div style="background-color: #f7f7f7; padding: 20px; font-family: Arial, sans-serif;">
          <div style="background-color: #fff; padding: 20px; border-radius: 4px;">
            <img src="https://www.kindpng.com/picc/m/117-1176237_pizza-king-logo-pizza-king-png-transparent-png.png" alt="Company Logo" style="display: block; margin: 0 auto; width: 150px;">
            <h2 style="color: #333; margin-top: 30px; text-align: center;">Email Verification</h2>
            <p style="color: #333; text-align: center;">Dear ${name},</p>
            <p style="color: #333; text-align: center;">Thank you for registering with our platform. Please verify your email by clicking the link below:</p>
            <div style="text-align: center; margin-top: 30px;">
              <a href="${process.env.BASE_URL}/verify-email/${verificationToken}" style="background-color: #4caf50; color: #fff; padding: 12px 20px; text-decoration: none; border-radius: 4px; font-weight: bold;">Verify Email</a>
            </div>
          </div>
          <p style="color: #666; text-align: center; margin-top: 30px;">If you did not register an account, please ignore this email.</p>
          <p style="color: #666; text-align: center;">Best regards,</p>
          <p style="color: #666; text-align: center;">The PizzaKing Team</p>
        </div>
      `
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error: ", error);
        res.status(500).json({ message: "Failed to send verification email" });
      } else {
        console.log("Email sent successfully!");
        res.status(200).json({ success: true, message: "Register success" });
      }
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
});


router.get("/verify-email/:token", async (req, res) => {
  const token = req.params.token;

  try {
    const user = await User.findOne({ verificationToken: token });

    if (user) {
      user.isVerified = true;
      user.verificationToken = undefined;
      await user.save();
      res.status(200).json({ success: true, message: "Email verified successfully" });
    } else {
      res.status(404).json({ success: false, message: "Invalid verification token" });
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});




router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    if (!user.isVerified) {
      return res.status(400).json({
        message: "User is not verified",
      });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Incorrect password",
      });
    }

    const currentUser = {
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      _id: user._id,
    };

    res.status(200).send(currentUser);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
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
          const saltRounds = 10;
          const hashedPassword = await bcrypt.hash(password, saltRounds);

          userData.password = hashedPassword;
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