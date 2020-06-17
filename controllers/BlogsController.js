/*
Christopher Ermel
200250446
6/03/2020
 */

//Setting up paths for views
const viewPath = ('blogs');

//view
exports.index = (req, res) => {
    res.send(`Got to catch em all - index`);
}

//view
exports.show = (req, res) => {
    res.send(`Yeah - show`);
}

//view
exports.new = (req, res) => {
    res.send(`Howdy Dowdy`);
}
//process
exports.create = (req, res) => {
    res.send(`HI - create`);
}

//view
exports.edit = (req, res) => {
    res.send(`Hi - Edit`);
}
//process
exports.update = (req, res) => {
    res.send(`Wow - update`);
}

//process
exports.delete = (req, res) => {
    res.send(`byebye - delete`);
}