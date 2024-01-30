const mongoose = require("mongoose");

console.log(process.env.NODE_ENV);

const connectDB = async () => {
  const MONGODB_URI =
    process.env.RELATIONS_PILOT_MONGODB_URI ||
    process.env.RELATIONS_PILOT_MONGODB_LIVE_URI;

  try {
    await mongoose.connect(MONGODB_URI);

    console.log("Database connected successfully");
  } catch (err) {
    throw new Error(`DB connection failed ${err}`);
  }
};

module.exports = { connectDB };
