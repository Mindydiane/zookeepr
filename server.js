//import and use fs library to write data to animals.json
const fs = require('fs');
//built into the Node.js API that provides utilities for working with file and directory paths especially w/Heroku
const path = require('path');
// inquiring express 1st step
const express = require("express");
// creates a route that the front-end can request data from
const { animals } = require("./data/animals");

//tell our app to use that port, if it has been set, and if not, default to port 80
const PORT = process.env.PORT || 3001;
//second step inquiring express
const app = express();

//(static middleware)to use js and css from public folder
app.use(express.static('public'));

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
