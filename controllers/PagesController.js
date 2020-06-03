/*
Christopher Ermel
200250446
6/03/2020
 */

//Setting up paths for views
const viewPath = ('pages');

//exports.ACTION
//req will tell us what we need to know
//res will give us a way to responed to the user/requester
exports.home = (req, res) => {
    //this will render the home.ejs file
    res.render(`${viewPath}/home`, {
        //This is used to pass data to the ejs file. 
        //pageTitle is the name of the variable used in the ejs file. 
        pageTitle: 'Welcome Home'
    });
};

exports.about = (req, res) => {
    res.render(`${viewPath}/about`, {
        pageTitle: 'About Me!'
    });
};

exports.contact = (req, res) => {
    res.render(`${viewPath}/contact`, {
        pageTitle: 'Contact Form'
    });
};