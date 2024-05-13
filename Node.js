const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 5503; // Your desired port number

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Function to log form submissions to a file
function logFormSubmission(data) {
    const logFilePath = 'form_submissions.log';

    // Format the form data
    const formattedData = JSON.stringify(data, null, 2);

    // Write the formatted data to the log file
    fs.appendFile(logFilePath, formattedData + '\n', (err) => {
        if (err) {
            console.error('Error writing to log file:', err);
        } else {
            console.log('Form submission logged successfully.');
        }
    });
}

// POST route handler for /contact
app.post('/contact', (req, res) => {
    // Handle the form submission here
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    // Log the form submission
    const formData = { name, email, message };
    logFormSubmission(formData);

    // Send a response back to the user
    res.send('Your message was received. Thank you!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
