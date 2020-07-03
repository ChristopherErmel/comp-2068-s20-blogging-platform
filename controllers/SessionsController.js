const User = require('../models/user');
const passport = require('passport');
const viewPath = 'sessions';

exports.new = (req, res) => {
    res.render(`${viewPath}/new`, {
        pageTitle: 'Login'
    });
};

exports.create = (req, res) => {
    //return funct deff
    //local is the authentication stratigy
    passport.authenticate('local', {
        successRedirect: '/blogs',
        successFlash: 'You were successfully logged in.',
        failureRedirect: '/login',
        failureFlash: 'Invalid Credentials'
        //passing details
    })(req, res);
};

exports.delete = (req, res) => {
    req.logout();
    req.flash('success', 'You were logged out successfully');
    res.redirect('/');
}