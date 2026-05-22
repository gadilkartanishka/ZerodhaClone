require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("database connected"));

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrderModel } = require("./model/OrdersModel");
const authRoute = require("./routes/AuthRoute");
const { requireAuth } = require("./middlewares/AuthMiddleware");

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "https://zerodha-clone-dzdk.vercel.app", // frontend
      "https://zerodha-clone-dashboard.vercel.app", // dashboard
    ],
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());
app.use("/", authRoute);

// app.get("/addholdings", requireAuth, async (req, res) => {
//   const tempHoldings = [
//     { name: "BHARTIARTL", qty: 2, avg: 538.05, price: 541.15, net: "+0.58%", day: "+2.99%" },
//     { name: "HDFCBANK", qty: 2, avg: 1383.4, price: 1522.35, net: "+10.04%", day: "+0.11%" },
//     { name: "HINDUNILVR", qty: 1, avg: 2335.85, price: 2417.4, net: "+3.49%", day: "+0.21%" },
//     { name: "INFY", qty: 1, avg: 1350.5, price: 1555.45, net: "+15.18%", day: "-1.60%", isLoss: true },
//     { name: "ITC", qty: 5, avg: 202.0, price: 207.9, net: "+2.92%", day: "+0.80%" },
//     { name: "KPITTECH", qty: 5, avg: 250.3, price: 266.45, net: "+6.45%", day: "+3.54%" },
//     { name: "M&M", qty: 2, avg: 809.9, price: 779.8, net: "-3.72%", day: "-0.01%", isLoss: true },
//     { name: "RELIANCE", qty: 1, avg: 2193.7, price: 2112.4, net: "-3.71%", day: "+1.44%" },
//     { name: "SBIN", qty: 4, avg: 324.35, price: 430.2, net: "+32.63%", day: "-0.34%", isLoss: true },
//     { name: "SGBMAY29", qty: 2, avg: 4727.0, price: 4719.0, net: "-0.17%", day: "+0.15%" },
//     { name: "TATAPOWER", qty: 5, avg: 104.2, price: 124.15, net: "+19.15%", day: "-0.24%", isLoss: true },
//     { name: "TCS", qty: 1, avg: 3041.7, price: 3194.8, net: "+5.03%", day: "-0.25%", isLoss: true },
//     { name: "WIPRO", qty: 4, avg: 489.3, price: 577.75, net: "+18.08%", day: "+0.32%" },
//   ];

//   tempHoldings.forEach((item) => new HoldingsModel(item).save());
//   res.send("DONE");
// });

// app.get("/addpositions", requireAuth, async (req, res) => {
//   const tempPositions = [
//     { product: "CNC", name: "EVEREADY", qty: 2, avg: 316.27, price: 312.35, net: "+0.58%", day: "-1.24%", isLoss: true },
//     { product: "CNC", name: "JUBLFOOD", qty: 1, avg: 3124.75, price: 3082.65, net: "+10.04%", day: "-1.35%", isLoss: true },
//   ];

//   tempPositions.forEach((item) => new PositionsModel(item).save());
//   res.send("done");
// });

app.get("/allholdings", requireAuth, async (req, res) => {
  const allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/getholdings", requireAuth, async (req, res) => {
  const allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/getpositions", requireAuth, async (req, res) => {
  const allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", requireAuth, async (req, res) => {
  const name = req.body.name;
  const qty = Number(req.body.qty);
  const price = Number(req.body.price);
  const mode = String(req.body.mode || "BUY").toUpperCase();

  let updatedHolding = null;

  if (mode === "BUY") {
    const holding = await HoldingsModel.findOne({ name });

    if (holding) {
      const newQty = holding.qty + qty;
      holding.avg = (holding.avg * holding.qty + price * qty) / newQty;
      holding.qty = newQty;
      holding.price = price;
      updatedHolding = await holding.save();
    } else {
      updatedHolding = await HoldingsModel.create({
        name,
        qty,
        avg: price,
        price,
        net: "0.00%",
        day: "0.00%",
      });
    }
  }

  if (mode === "SELL") {
    const holding = await HoldingsModel.findOne({ name });

    holding.qty -= qty;
    if (holding.qty === 0) {
      await HoldingsModel.deleteOne({ _id: holding._id });
    } else {
      updatedHolding = await holding.save();
    }
  }

  const savedOrder = await new OrderModel({ name, qty, price, mode }).save();
  res.status(201).json({ order: savedOrder, holding: updatedHolding });
});

app.get("/orders", requireAuth, async (req, res) => {
  const allOrders = await OrderModel.find({});
  res.json(allOrders);
});

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
