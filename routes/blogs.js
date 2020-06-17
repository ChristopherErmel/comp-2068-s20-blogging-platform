/*
Christopher Ermel
200250446
6/03/2020
 */

 //destructuring the new keyword and giving it and ailis of _new
 //requiring our blogs controller
 const {new: _new, index, show, create, edit, update, delete: _delete} = require('../controllers/BlogsController');


 module.exports = router => {
    router.get('/blogs/index', index);        
    router.get('/blogs/new', _new);
    
    //we dont need an id here because we will be sending out id feild with out edit string...
    router.post('/blogs/create', create);
    router.post('/blogs/update', update);
    router.post('/blogs/delete', _delete);
    
    router.get('/blogs/:id/edit', edit);
    //grab an id and and send them to show that specific id. Needs to be at the bottom
    //or we wont be able to get a chance to match the posts
    router.get('/blogs/:id', show);
};
