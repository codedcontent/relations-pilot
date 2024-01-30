require("dotenv").config();

const mongoose = require("mongoose");

const connectDB = async () => {
  const MONGODB_URI =
    process.env.NODE_ENV === "production"
      ? process.env.RELATIONS_PILOT_MONGODB_LIVE_URI
      : process.env.RELATIONS_PILOT_MONGODB_URI;

  try {
    await mongoose.connect(MONGODB_URI);

    console.log("Database connected successfully");
  } catch (err) {
    throw new Error(`DB connection failed ${err}`);
  }
};

module.exports = { connectDB };
