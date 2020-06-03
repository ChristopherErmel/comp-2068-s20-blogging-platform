/*
Christopher Ermel
200250446
6/03/2020
 */
console.log("exported the module");

const {home, about, contact} = require('../controllers/PagesController');


module.exports = router => {
    router.get('/', home);

    router.get('/about', about);

    router.get('/contact', contact);
};