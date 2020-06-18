const mongoose = require('mongoose');

//these are the things we need inside our document
//every document will look like this
//The BLUEPRINT for the documents!
//schema...
const BlogSchema = new mongoose.Schema({
    //list of atributes 
    title: {
        //data type
        type: String,
        //validation/ this must be input
        required: true
    },
    content: {
        type: String,
        required: false
    },
    status: {
        type: String,
        //must be one of these values
        enum: ['DRAFT', 'PUBLISHED'],
        //the default if they choose nothing...
        default: 'DRAFT'
    }
}, {
    //this will create a timestamp for us...
    timestamps: true
});

// Query Helpers!
BlogSchema.query.drafts = function () {
    //first query sting
    //where takes the object you want to check and the vlue under it
    return this.where({
        status: 'DRAFT'
    })
};

BlogSchema.query.published = function () {
    return this.where({
        status: 'PUBLISHED'
    })
};

//a virture is an atribute that is not part of our model
//we can trucate it and use it how we want but its not in the model...
// this will get all the content of the post and then return the trucated version of that post
BlogSchema.virtual('synopsis').get(function () {
    const post = this.content;
    //this will strip the html and then trucate it to 250 chars...
    return post.replace(/(<([^>]+)>)/ig, "").substring(0, 250);
});

//need to export this!
//can call it what ever we want, but need to select the correct schema
module.exports = mongoose.model('Blog', BlogSchema);

