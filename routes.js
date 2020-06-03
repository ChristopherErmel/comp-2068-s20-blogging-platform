// const express = require('express');
// const app = express();

//Import Routes
const router = require('express').Router();


//Register our Routes
//resource routes below
(require('./routes/pages'))(router);


//Exports our router
//we need to export in order for our app to use this as middleware...
module.exports = router;