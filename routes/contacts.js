const express = require("express");
const { Contact } = require("../models/contact");
const router = express.Router();

// Route to get all contacts
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ updatedAt: 1 });
    res.json(contacts);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
});

// Route to create a new contact
router.post("/", async (req, res) => {
  const { name, phone, email } = req.body;

  try {
    if (!name || !phone) {
      return res.status(400).json({
        error: "Bad Request",
        message: "Name and phone are required fields.",
      });
    }

    const newContact = new Contact({ name, phone, email });
    const savedContact = await newContact.save();

    res.status(201).json(savedContact);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
});

// Route to get a single contact by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const contact = await Contact.findById(id);

    if (!contact) {
      return res
        .status(404)
        .json({ error: "Not Found", message: "Contact not found" });
    }

    res.status(200).json(contact);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
});

// Route to update a contact by ID
router.put("/:id", async (req, res, next) => {
  const { id } = req.params;
  const updatedContact = req.body;

  try {
    // Update the contact with the new information
    const updatedDoc = await Contact.findOneAndUpdate(
      { _id: id },
      updatedContact,
      { new: true, runValidators: true, useFindAndModify: false }
    );

    if (!updatedDoc) {
      return res
        .status(404)
        .json({ error: "Not Found", message: "Contact not found" });
    }

    res.status(200).json(updatedDoc);
  } catch (error) {
    // Pass the error to the error handling middleware
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
});

// Route to delete a contact by ID
router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    // Delete the contact with the given ID
    const result = await Contact.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
      return res
        .status(404)
        .json({ error: "Not Found", message: "Contact not found" });
    }

    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    // Pass the error to the error handling middleware
    res
      .status(500)
      .json({ error: "Internal Server Error", message: err.message });
  }
});

module.exports = router;
