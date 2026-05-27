require("dotenv").config();
const cors = require('cors');
const bodyparser = require('body-parser')
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserModel = require("./models/UserSchema");
const { PositionModel } = require("./models/PositionModel");
const { HoldingModel } = require("./models/HoldingModel");
const { OrderModel } = require("./models/OrderModel")

const app = express();

app.use(cors());
app.use(bodyparser.json());

app.get("/holdings", async (req, res) => {

//   try {

//     let tempHoldings = [
//       {
//         name: "BHARTIARTL",
//         qty: 2,
//         avg: 538.05,
//         price: 541.15,
//         net: "+0.58%",
//         day: "+2.99%",
//       },
//       {
//         name: "HDFCBANK",
//         qty: 2,
//         avg: 1383.4,
//         price: 1522.35,
//         net: "+10.04%",
//         day: "+0.11%",
//       },
//       {
//         name: "HINDUNILVR",
//         qty: 1,
//         avg: 2335.85,
//         price: 2417.4,
//         net: "+3.49%",
//         day: "+0.21%",
//       },
//       {
//         name: "INFY",
//         qty: 1,
//         avg: 1350.5,
//         price: 1555.45,
//         net: "+15.18%",
//         day: "-1.60%",
//       },
//       {
//         name: "ITC",
//         qty: 5,
//         avg: 202.0,
//         price: 207.9,
//         net: "+2.92%",
//         day: "+0.80%",
//       },
//       {
//         name: "KPITTECH",
//         qty: 5,
//         avg: 250.3,
//         price: 266.45,
//         net: "+6.45%",
//         day: "+3.54%",
//       },
//       {
//         name: "M&M",
//         qty: 2,
//         avg: 809.9,
//         price: 779.8,
//         net: "-3.72%",
//         day: "-0.01%",
//       },
//       {
//         name: "RELIANCE",
//         qty: 1,
//         avg: 2193.7,
//         price: 2112.4,
//         net: "-3.71%",
//         day: "+1.44%",
//       },
//       {
//         name: "SBIN",
//         qty: 4,
//         avg: 324.35,
//         price: 430.2,
//         net: "+32.63%",
//         day: "-0.34%",
//       },
//       {
//         name: "SGBMAY29",
//         qty: 2,
//         avg: 4727.0,
//         price: 4719.0,
//         net: "-0.17%",
//         day: "+0.15%",
//       },
//       {
//         name: "TATAPOWER",
//         qty: 5,
//         avg: 104.2,
//         price: 124.15,
//         net: "+19.15%",
//         day: "-0.24%",
//       },
//       {
//         name: "TCS",
//         qty: 1,
//         avg: 3041.7,
//         price: 3194.8,
//         net: "+5.03%",
//         day: "-0.25%",
//       },
//       {
//         name: "WIPRO",
//         qty: 4,
//         avg: 489.3,
//         price: 577.75,
//         net: "+18.08%",
//         day: "+0.32%",
//       },
//     ];

//     await HoldingModel.insertMany(tempHoldings);

//     res.send("✅ Holdings Saved Successfully");

//   } catch (err) {

//     console.log(err);

//     res.send("❌ Error saving holdings");

//   }

});

app.get("/postings", async (req, res) => {
let temppositions = [
  {
    product: "CNC",
    name: "EVEREADY",
    qty: 2,
    avg: 316.27,
    price: 312.35,
    net: "+0.58%",
    day: "-1.24%",
    isLoss: true,
  },
  {
    product: "CNC",
    name: "JUBLFOOD",
    qty: 1,
    avg: 3124.75,
    price: 3082.65,
    net: "+10.04%",
    day: "-1.35%",
    isLoss: true,
  },
];

    await PositionModel.insertMany(temppositions);
   res.send("✅ Position Saved Successfully");

});


app.get("/allHoldings",async(req,res)=>{
  let allHoldings = await HoldingModel.find({}); // it is a end point used for fetching and connect the daskboard
  res.json(allHoldings);
})


app.get("/allPositions",async(req,res)=>{
  let allPosition = await PositionModel.find({}); // it is a end point used for fetching and connect the daskboard
  res.json(allPosition);
})

app.post("/newOrder", async (req, res) => {

  try {

    let newOrder = new OrderModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();

    console.log("✅ Order Saved:", newOrder);

    res.send("Order Saved");

  } catch (err) {

    console.log("❌ Error saving order:", err);

    res.status(500).send("Error saving order");

  }

});

// SIGNUP ROUTE
app.post("/signup", async (req, res) => {

  const { name, phone, password } = req.body;

  try {

    // CHECK USER
    const existingUser = await UserModel.findOne({ phone });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // HASH PASSWORD
    const hashedPassword = await bcrypt.hash(password, 10);

    // SAVE USER
    const newUser = new UserModel({
      name,
      phone,
      password: hashedPassword,
    });

    await newUser.save();

    res.json({
      message: "Signup Success",
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: "Server Error",
    });

  }
});


// SIGNIN ROUTE
app.post("/signin", async (req, res) => {

  const { phone, password } = req.body;

  try {

    // FIND USER
    const user = await UserModel.findOne({ phone });
    if (!user) {
      return res.status(400).json({
        message: "User Not Found",
      });
    }

    // PASSWORD CHECK
    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: "Wrong Password",
      });
    }

    // TOKEN
    const token = jwt.sign(
      { id: user._id },
      "SECRETKEY"
    );

    res.json({
      message: "Login Success",
      token,
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: "Server Error",
    });

  }
});


const PORT = process.env.PORT || 3002;

async function startServer() {

  try {

    await mongoose.connect(process.env.MONGO_URL);

    console.log("✅ MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });

  } catch (err) {

    console.log("❌ MongoDB Error:", err);

  }

}

startServer();