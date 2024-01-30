require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { selectContacts } = require("./utilities/select-contacts");
const { connectDB } = require("./config/db");
const { scheduleCronJobs } = require("./services/cron-job-scheduler");
const contactRoutes = require("./routes/contacts");

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Routes
// Use contacts routes
app.use("/api/contacts", contactRoutes);

// Connect to MongoDB and start the server if connection is successful
const startServer = async () => {
  try {
    await connectDB();

    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });

    // Schedule cron jobs
    scheduleCronJobs();
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

// Call the function to start the server after connecting to MongoDB
startServer();
