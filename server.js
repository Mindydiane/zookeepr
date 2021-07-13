// inquiring express 1st step
const express = require('express');
// creats a route that the front-end can request data from
const { animals } = require('./data/animals');

//second step inquiring express
const app = express();


//add a route, get method requires two arguements
app.get('/api/animals', (req, res) => {
    res.send('Hello!'); 
});
// listen for port 3001
app.listen(3001, () => {
    console.log('API server now on port 3001')
});