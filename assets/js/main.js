//console.log("Loading Main JS");
//all of the code we want to use after the dom is loaded gose in here!
document.addEventListener("DOMContentLoaded", () => {
    //to get the class summernote
    $('.summernote').summernote({
        //object litteral for the argument
        placeholder: 'Let the words flow...',
        tabsize: 2, 
        height: 300
    });
});