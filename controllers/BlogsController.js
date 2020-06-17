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
exports.index = (req, res) => {
    res.send(`Got to catch em all - index`);
};

//view
exports.show = async (req, res) => {
    //console.log(req.params);
    const blog = await Blog.findById(req.params.id);
    console.log(blog);
    res.render(`${viewPath}/show`, {
        pageTitle: blog.title,
        blog: blog
    });
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
        //this will redirect the user to a different page.
        res.redirect(`/blogs/${blog.id}`);
    } catch (err){
        res.send(`Error: ${err}`);
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