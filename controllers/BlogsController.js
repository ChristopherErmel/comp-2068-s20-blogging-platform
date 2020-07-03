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
    const blogs = await Blog.find().sort({updatedAt: 'desc'});
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
    } catch (error){
        //danger red :(!
        req.flash('danger', `There was an error creating this blog: ${error}`);
        //to resend the info to the form is there was an error
        req.session.formData = req.body;
        res.redirect('/blogs/new');
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
exports.edit = async (req, res) => {
    try{
    const blog = await Blog.findById(req.params.id);
    res.render(`${viewPath}/edit`, {
        pageTitle: blog.title,
        formData: blog
    });
    } catch (error) {
        req.flash('danger', `There was an error accessing this blog: ${error}`);
        res.redirect('/');
        //console.log(error);
    }
};
//process
exports.update = async (req, res) => {
    try {
        let blog = await Blog.findById(req.body.id);
        //if theres no blog throw error
        if (!blog) throw new Error('Blog could not be found');

        //this is used to validate the content
        await Blog.validate(req.body);
        //this is used to update the content
        //need _id for proper handeling
        await Blog.updateOne({_id: req.body.id}, req.body);

        req.flash('success', 'The blog was updated successfully.');
        res.redirect(`/blogs/${req.body.id}`);


    } catch (error) {
        req.flash('danger', `There was an error updating this blog: ${error}`);
        res.redirect('/blogs/${req.body.id}/edit');
    }
};

//process
exports.delete = async (req, res) => {
    try {
        
        //deleted the post...
        await Blog.deleteOne({_id: req.body.id});

        req.flash('success', 'The blog was deleted successfully.');
        res.redirect(`/blogs`);        
    } catch (error) {
        req.flash('danger', `There was an error deleting this blog: ${error}`);
        res.redirect('/blogs'); 
    }
};