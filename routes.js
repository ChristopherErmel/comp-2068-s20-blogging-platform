/*
Christopher Ermel
200250446
6/03/2020
*/

// const express = require('express');
// const app = express();

//Import Routes
const router = require('express').Router();


//Register our Routes
//resource routes below
(require('./routes/pages'))(router);
(require('./routes/blogs'))(router);
(require('./routes/users'))(router);
(require('./routes/sessions'))(router);

//Exports our router
//we need to export in order for our app to use this as middleware...
module.exports = router;