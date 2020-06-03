const express = require('express');
const app = express();

const path = require('path');

//set our views directory
//sets the views and the path for the views. 
//finds the home dir and then finds views for us
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//need to register our routing
const routes = require('./routes.js');
//use this routes file as middleware
//this will use the middelware provided
//this will forward all infor from the user into the routes folder...
app.use('/', routes);

//Start our server
app.listen(process.env.PORT || 3000, () => console.log(`Listening on port 3000`));