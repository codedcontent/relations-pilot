const selectContacts = (allContacts) => {
  // Select the first 4 contacts in the array
  const selectedContacts = allContacts.slice(0, 4);

  // Update the array so that first 4 is now last 4
  allContacts = [...allContacts.slice(0, 4), ...selectedContacts];

  return { selectedContacts, allContacts };
};

module.exports = { selectContacts };
