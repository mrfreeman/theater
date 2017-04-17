
//server.js
'use strict'
//first we import our dependencies…
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Ticket = require('./model/tickets');
//and create our instances
var app = express();
var router = express.Router();
//set our port to either a predetermined port number if you have set
//it up, or 3001
var port = process.env.API_PORT || 3001;
//db config
mongoose.connect('mongodb://egor:balenko123@ds159880.mlab.com:59880/msk-bilet');
//now we should configure the API to use bodyParser and look for
//JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//To prevent errors from Cross Origin Resource Sharing, we will set
//our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
//and remove cacheing so we get the most recent tickets
 res.setHeader('Cache-Control', 'no-cache');
 next();
});
//now we can set the route path & initialize the API
// //Use our router configuration when we call /api
app.use('/api', router);
// //starts the server and listens for requests
app.listen(port, function() {
    console.log('api running on port ${port}');
 });
//now we can set the route path & initialize the API
router.get('/', function(req, res) {
 res.json({ message: 'API Initialized!'});
});
//adding the /comments route to our /api router
router.route('/tickets')
 //retrieve all comments from the database
 .get(function(req, res) {
 //looks at our Comment Schema
 Ticket.find(function(err, tickets) {
 if (err)
 res.send(err);
 //responds with a json object of our database comments.
 res.json(tickets)
 });
 })
 //post new comment to the database
 .post(function(req, res) {
 var ticket = new Ticket();
 //body parser lets us use the req.body
 ticket.name = req.body.name;
 ticket.text = req.body.text;
ticket.save(function(err) {
 if (err)
 res.send(err);
 res.json({ message: 'Ticket successfully added!' });
 });
 });
//Use our router configuration when we call /api
//Adding a route to a specific comment based on the database ID
router.route('/tickets/:ticket_id')
//The put method gives us the chance to update our comment based on
//the ID passed to the route
.put(function(req, res) {
Ticket.findById(req.params.ticket_id, function(err, ticket) {
if (err)
res.send(err);
//setting the new author and text to whatever was changed. If
//nothing was changed we will not alter the field.
(req.body.name) ? ticket.name = req.body.name : null;
(req.body.text) ? ticket.text = req.body.text : null;
//save comment
ticket.save(function(err) {
if (err)
res.send(err);
res.json({ message: 'Ticket has been updated' });
});
});
})
//delete method for removing a comment from our database
.delete(function(req, res) {
//selects the comment by its ID, then removes it.
Ticket.remove({ _id: req.params.ticket_id }, function(err, ticket) {
if (err)
res.send(err);
res.json({ message: 'Ticket has been deleted' })
})
});
