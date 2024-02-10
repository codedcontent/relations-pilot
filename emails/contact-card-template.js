const getContactCardEmailTemplate = (contacts) => {
  // <div class="card">
  //     <p><strong>Contact ${index + 1}:</strong></p>
  //     <p>Name: ${contact.name}</p>
  //     <p>Email: <a href="mailto:${contact.email}">${contact.email}</a></p>
  //   </div>

  const contactCards = contacts
    .map(
      (contact, index) => `
    <div style='border: 1px solid #ddd; border-radius: 8px; padding: 15px; margin-bottom: 10px;'>
        <p style='margin: 0; font-weight: bold;'>${contact.name}</p>
        <p style='margin: 5px 0;'>Phone: <a href='tel:${contact.phone}'>${contact.phone}</a></p>
        <p style='margin: 5px 0;'>WhatsApp: <a href='https://wa.me/${contact.phone}' target='_blank'>Chat with ${contact.name}</a></p>
    </div>
  `
    )
    .join("");

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Email Template</title>
  </head>
  <body style="font-family: 'Arial', sans-serif; margin: 0; padding: 20px; background-color: #f4f4f4;">
  
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
          
          <!-- Greeting -->
          <h3 style="color: #333; text-align: center;">Hey, remember to build your relationships with your network.</h3>
  
          <!-- Contact Information Card Container -->
          <div id="contactCardContainer" style="background-color: #f0f0f0; padding: 20px; border-radius: 8px; margin-top: 20px;">
              ${contactCards}
          </div>
  

          <!-- Closing Note -->
          <p style="color: #555; margin-top: 20px; text-align: center;">Feel free to reach out if you have any questions or concerns.</p>
        
      </div>

  </body>
  </html>
  `;
};

module.exports = { getContactCardEmailTemplate };
