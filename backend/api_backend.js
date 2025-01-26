const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./db_connection");

const app = express();
const PORT = 5000;

// Connect to Database
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Order Schema
const mongoose = require("mongoose");
const OrderSchema = new mongoose.Schema({
  memberType: { type: String, required: true },
  quantity: { type: Number, required: true },
  username: { type: String, required: true },
  status: { type: String, default: "Pending" },
});
const Order = mongoose.model("Order", OrderSchema);

// Routes
app.post("/api/orders", async (req, res) => {
  const { memberType, quantity, username } = req.body;
  if (!memberType || !quantity || !username) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const order = new Order({ memberType, quantity, username });
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ error: "Failed to create order." });
  }
});

app.get("/api/orders", async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch orders." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});