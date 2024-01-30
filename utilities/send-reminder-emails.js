const {
  getContactCardEmailTemplate,
} = require("../emails/contact-card-template");
const { Contact } = require("../models/contact");
const { sendMail } = require("../services/mail-service");

// Function to send reminder emails
const sendReminderEmails = async () => {
  try {
    // Fetch the oldest 4 contacts based on their updatedAt date
    const contacts = await Contact.find().sort({ updatedAt: 1 }).limit(4);

    // If there are no contacts, do nothing
    if (contacts.length === 0) {
      console.log("No contacts found to send reminder emails.");
      return;
    }

    const emailTemplate = getContactCardEmailTemplate(contacts);

    // Adjust subject and toEmail as needed
    const sendMailResult = await sendMail({
      message: emailTemplate,
      subject: "Friendly Reminder to Build your Relationships!",
      toEmail: "ogescoc@gmail.com",
    });

    console.log(sendMailResult);

    // Update the updatedAt date for the selected contacts to the current time
    const currentDateTime = new Date();
    const updatePromises = contacts.map(async (contact) => {
      try {
        contact.updatedAt = currentDateTime;
        await contact.save();
      } catch (updateError) {
        // Log the error, but don't stop the whole process
        console.error(
          "Error updating updatedAt date for a contact:",
          updateError
        );
      }
    });

    await Promise.all(updatePromises);

    console.log(
      "Reminder emails sent and updatedAt dates updated for the contacts."
    );
  } catch (error) {
    console.error("Error sending reminder emails:", error);
  }
};

module.exports = { sendReminderEmails };
