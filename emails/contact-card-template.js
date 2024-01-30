const getContactCardEmailTemplate = (contacts) => {
  const contactCards = contacts
    .map(
      (contact, index) => `
    <div class="card">
      <p><strong>Contact ${index + 1}:</strong></p>
      <p>Name: ${contact.name}</p>
      <p>Email: <a href="mailto:${contact.email}">${contact.email}</a></p>
    </div>
  `
    )
    .join("");

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Contact Information</title>
      <style>
        body {
          font-family: 'Arial', sans-serif;
          background-color: #f4f4f4;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 20px auto;
          padding: 20px;
          background-color: #ffffff;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
        }
        .card {
          border: 1px solid #e1e1e1;
          padding: 10px;
          margin-bottom: 15px;
          background-color: #ffffff;
          border-radius: 5px;
        }
        h2 {
          color: #333;
        }
        p {
          color: #666;
          margin-bottom: 10px;
        }
        a {
          color: #007bff;
          text-decoration: none;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h2>Contact Information</h2>
        
        ${contactCards}
        
      </div>
    </body>
    </html>
  `;
};

module.exports = { getContactCardEmailTemplate };
