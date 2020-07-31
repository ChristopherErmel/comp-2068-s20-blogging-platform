/*
Christopher Ermel
200250446
6/03/2020
 */

 //destructuring the new keyword and giving it and ailis of _new
 //requiring our blogs controller
 const {new: _new, index, show, create, edit, update, delete: _delete} = require('../controllers/BlogsController');

//to check for loged in status
function auth (req, res, next) {    
    if(!req.isAuthenticated()){
        // req.flash('danger', 'You need to login.');
        // return res.redirect('/login');

        //r3eact
        return res.status(401).json({message: "You must authenticate before using this API call"});
    }
    next();
}

 module.exports = router => {
    router.get('/blogs', index); //public       
    router.get('/blogs/new', auth, _new); //authenticated
    
    //we dont need an id here because we will be sending out id feild with out edit string...
    router.post('/blogs', auth, create); //authenticated
    router.post('/blogs/update', auth, update); //authenticated
    router.post('/blogs/delete', auth, _delete);//authenticated
    
    router.get('/blogs/:id/edit', auth, edit); //authenticated
    //grab an id and and send them to show that specific id. Needs to be at the bottom
    //or we wont be able to get a chance to match the posts
    router.get('/blogs/:id', show); //public
};
