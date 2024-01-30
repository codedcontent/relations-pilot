const cron = require("node-cron");
const { sendReminderEmails } = require("../utilities/send-reminder-emails");

const scheduleCronJobs = () => {
  // Run every 5 seconds
  cron.schedule("*/5 * * * * *", async () => {});

  // Run every Saturday at 4 AM
  cron.schedule("0 4 * * 6", async () => {
    sendReminderEmails();
  });
};

module.exports = { scheduleCronJobs };
