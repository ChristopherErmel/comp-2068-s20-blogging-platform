const express = require('express');
const app = express();

//getting our env variables
require('dotenv').config();

const path = require('path');

//Mongo access
const mongoose = require('mongoose');
//env is the enviornment, bd uri is the url var
mongoose.connect(process.env.DB_URI, {
    auth: {
        user: process.env.DB_USER,
        password: process.env.DB_PASS
    },
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(err => console.error(`Error: ${err}`));


//implement body parser
//needs to be after connection to db AND before our routes!
//this allows us to interpret our form paramaters
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


//implement sessions!
//needed for passport
const passport = require('passport');
const session = require('express-session');
app.use(session({
    secret: 'any salty secret here',
    resave: true,
    saveUninitialized: false
}));

//setting up passport
app.use(passport.initialize());
app.use(passport.session());
const User = require('./models/user');
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//set our views directory
//sets the views and the path for the views. 
//finds the home dir and then finds views for us
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



//implement our flash notification and defaults!
const flash = require('connect-flash');
app.use(flash());
//custom middleware for flash
app.use('/', (req, res, next) => {
    //setting the default local vars
    //this will effect every page...
    res.locals.pageTitle = "Untitled";

    //this will take all the flash msgs and store them in a local var
    res.locals.flash = req.flash();

    //if we have form data we will see it, if not nothing
    res.locals.formData = req.session.formData || {};
    //we need to clear the formdata after refresh of page
    req.session.formData = {};

    //authentication helper
    res.locals.authorized = req.isAuthenticated();
    if(res.locals.authorized){
        res.locals.email = req.session.passport.user;
    }


    //this will jump to the next middleware now
    next();
});


//need to register our routing
const routes = require('./routes.js');
//use this routes file as middleware
//this will use the middelware provided
//this will forward all infor from the user into the routes folder...
app.use('/', routes);
//use registers our middleware
app.use('/css', express.static('assets/css'));
app.use('/js', express.static('assets/js'));
app.use('/images', express.static('assets/images'));

//Start our server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port 3000`));