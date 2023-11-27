const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Serve static files from the 'Folder-FE-2-section-surabaya-group-25' directory
app.use(express.static(path.join(__dirname,'..', 'FE-2-section-surabaya-group-25')));

// Use middleware to parse the request body
app.use(bodyParser.urlencoded({ extended: true }));

// Define a route to handle requests and serve the 'index.html' file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..','FE-2-section-surabaya-group-25', 'contact.html'));
});

// Handle POST request from the form
app.post('/submit', (req, res) => {
    // Access form data from the request body
    const firstName = req.body.first_name;
    const lastName = req.body.last_name;
    const email = req.body['e-mail'];
    const message = req.body.message;

    // Process the data as needed
    // For example, log it to the console
    console.log(`Received form data:
        First Name: ${firstName}
        Last Name: ${lastName}
        Email: ${email}
        Message: ${message}
    `);

    // Send a response
    res.redirect('contact.html');
});
//---end contact form

//---start login api
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..','FE-2-section-surabaya-group-25/admin', 'signin.html'));
});
app.use(bodyParser.urlencoded({ extended: true }));
// Endpoint untuk menangani permintaan login
app.post('/login', (req, res) => {
    // Get data from the form
    const username = req.body.username;
    const password = req.body.password;

    // Perform authentication validation
    // Example: If username is "admin" and password is "admin123", consider it successful
    if (username === "admin" && password ==="admin123") {
        // Redirect to the dashboard page on successful login
        res.redirect('/dashboard.html');
    } else {
        // Display an error message if login fails
        res.send('Login failed. Invalid credentials.');
    }
});
// Add a route to handle the GET request for /dashboard.html
app.get('/dashboard.html', (req, res) => {
    // Implement logic to render the dashboard page
    res.sendFile(path.join(__dirname, '..', 'FE-2-section-surabaya-group-25/admin', 'dashboard.html'));
});
//---end login api



//--start-dashboar

//--end-dashboar



// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
