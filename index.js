const express = require('express');
const path = require('path');  // Add this line to import the path module
const {Client} = require('pg');

const PORT = 4000;
const app = express();

// connect db
const DB_USER = 'root';
const DB_PASSWORD = 'example';
const DB_PORT = 5432;
const DB_HOST= 'postgres';

const URI = `postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;
const client = new Client({
  connectionString: URI,
});
client
.connect()
.then (()=> console.log ('connected to postgres-db....'))
.catch ((err) => console.log('Failed to connect o postgres db: ',err));

// Serve static files from the 'templates' directory
app.use('/static', express.static(path.join(__dirname, 'static')));

// Route to serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates', 'index.html')); // Correct file path
});

app.listen(PORT, () => {
  console.log(`App is UP and running on port ${PORT}`);
});
