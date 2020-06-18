/*
Christopher Ermel
200250446
6/03/2020
 */

//Setting up paths for views
const viewPath = ('blogs');

//to inclued our blog schema!
const Blog = require('../models/blog');

//view
exports.index = async (req, res) => {
    try {
    //to get all the blogs
    const blogs = await Blog.find();
    res.render(`${viewPath}/index`, {
        pageTitle: 'Archive',
        blogs: blogs
        });
    } catch (error) {
        req.flash('danger', `There was an error displaying the archive: ${error}`);
        res.redirect('/');
    }
};

//view
exports.show = async (req, res) => {
    try {
    //console.log(req.params);
    const blog = await Blog.findById(req.params.id);
    //console.log(blog);
    res.render(`${viewPath}/show`, {
        pageTitle: blog.title,
        blog: blog
    });
    } catch (error) {
        req.flash('danger', `There was an error displaying this blog: ${error}`);
        res.redirect('/');
    }
};

//view
exports.new = (req, res) => {
    res.render(`${viewPath}/new`, {
        pageTitle: 'New Blog'
    });
};
//process
//this is for writing the blog content from new to the db
exports.create = async (req, res) => {
    //easy way to view loggs
    //req.body for the body section of the output
    //stringify null 2 to make it look pretty and alot easier to read
    //console.log(`Blog Body ${JSON.stringify(req.body, null, 2)}`);

    //mongoos model for creating a blog
    //we will turn this into an async function with await.
    try{
        //this const is to allow us to grab the id from the blog info to use for the blog id show page...
        const blog = await Blog.create(req.body);
        //success green!
        req.flash('success', 'Blog Created Successfully!');

        //this will redirect the user to a different page.
        res.redirect(`/blogs/${blog.id}`);
    } catch (err){
        //danger red :(!
        req.flash('danger', `There was an error creating this blog: ${error}`);
        res.redirect('/new');
        // res.send(`Error: ${err}`);
    };

    //this is old, without await...
    /*
    .then(blog => {
        console.log(blog);
    })
    .catch(err => {
        console.error(`Error: ${err}`);
    })
    */
    //object litteral way, lazy...
    /*{
        //sending the info from the req body
        title: req.body.title,
        content: req.body.content,
        status: req.body.status
    }*/
};

//view
exports.edit = (req, res) => {
    res.send(`Hi - Edit`);
};
//process
exports.update = (req, res) => {
    res.send(`Wow - update`);
};

//process
exports.delete = (req, res) => {
    res.send(`byebye - delete`);
};