const User = require('../models/user');
const passport = require('passport');
const viewPath = 'sessions';

exports.new = (req, res) => {
    res.render(`${viewPath}/new`, {
        pageTitle: 'Login'
    });
};

exports.create = (req, res, next) => {
    //with react to see data
    return res.status(200).json({...req.body, message: "Hello."});

    //return funct deff
    //local is the authentication stratigy
    passport.authenticate('local', {
        successRedirect: '/blogs',
        successFlash: 'You were successfully logged in.',
        failureRedirect: '/login',
        failureFlash: 'Invalid Credentials'
        //passing details
    })(req, res, next);
};

exports.delete = (req, res) => {
    req.logout();
    req.flash('success', 'You were logged out successfully');
    res.redirect('/');
}