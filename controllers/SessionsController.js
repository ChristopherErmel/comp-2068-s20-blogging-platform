const User = require('../models/user');
const passport = require('passport');
const viewPath = 'sessions';

const jwt = require('jsonwebtoken');

exports.new = (req, res) => {
    res.render(`${viewPath}/new`, {
        pageTitle: 'Login'
    });
};

exports.create = (req, res, next) => {
    // //with react to see data
    // return res.status(200).json({...req.body, message: "Hello."});

    // //return funct deff
    // //local is the authentication stratigy
    // passport.authenticate('local', {
    //     successRedirect: '/blogs',
    //     successFlash: 'You were successfully logged in.',
    //     failureRedirect: '/login',
    //     failureFlash: 'Invalid Credentials'
    //     //passing details
    // })(req, res, next);

    passport.authenticate('local', (err, user) => {
        if(err || !user){
            return res.status(401).json({
                status: 'failed',
                message: 'Not Authorized',
                error: err
            });
        }
        req.login(user, err => {
            if(err || !user){
                return res.status(401).json({
                    status: 'failed',
                    message: 'Not Authorized',
                    error: err
                });
            }
            // un setts the property for password, dosnt effect db
            delete user.password;
            //user and salt key, salt key has to be the same as in app js!!!!!
            const token = jwt.sign({user: user}, 'superSecretSaltKey');
            //assign token to cookie
            //httponly to secure app, only will get info from http not curl or anything else.
            res.cookie('token', token, {httpOnly: true});

            return res.status(200).json({
                status: 'success',
                message: 'Logged in successfully',
                user
            })
        });        
    })(req, res, next);
};

exports.delete = (req, res) => {
    req.logout();
    req.flash('success', 'You were logged out successfully');
    res.redirect('/');
}