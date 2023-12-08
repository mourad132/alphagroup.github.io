//Setting Up Express
const express = require('express');
const route = express.Router();
const Events = require('../models/event');

//Landing Page
route.get('/', (req, res) => {
    res.send("landing page");
});

//Home Page
route.get('/home', (req, res) => {
    res.send('home page')
})

// Events Page
route.get('/events', (req, res) => {
    Events.find({})
        .then(events => res.send(events))
        .catch(err => console.log(err));
})

// Event Page
route.get('/events/:id', (req, res) => {
    Events.findById(req.params.id)
        .then(event => res.send(event))
        .catch(err => console.log(err));
});

//Contact Us Page
route.get('/contact-us', (req, res) => {
    res.send('contact us page');
})

module.exports = route;