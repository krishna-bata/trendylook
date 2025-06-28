const express = require("express");
const Subscriber = require("../models/Subscriber");

const router = express.Router();

// @route POST /api/subscribe
// @desc handle newsletter subscription
// @access Public
router.post("/subscribe", async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }
  try {
    let subscriber = await Subscriber.findOne({ email });
    if (subscriber) {
      return res.status(200).json({ message: "email is alraedy subscribed" });
    }

    //    Create a new subscriber
    subscriber = new Subscriber({ email });
    await subscriber.save();

    res.status(201).json({ message: "Successfully subscribed to newsletter" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router