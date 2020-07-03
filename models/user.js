const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');


const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        //faster search only unique emails...
        unique: true,
        //not allowing duplicate emails...
        dropDups: true,
        //validate function
        validate: [
                {
                validator: function (value){
                    return this.emailConfirmation === value;
                },
                message: props => `${props.value} doesn't match the email confirmation`
            },
            {
                validator: async function (value){
                    const emailCounter = await this.model('User').count({email: value});
                        return !emailCounter;
                },
                message: props => `${props.value} exists. Please try a new email of login!`
            }
        ]
    }
}, {
    timestamps: true
});

//validation attribute
UserSchema.virtual('emailConfirmation')
//get data from form
.get(function (){
    return this._emailConfirmation;
})
//set form data
.set(function (value){
    this._emailConfirmation = value;
});



UserSchema.virtual('password')
.get(function (){
    return this._password;
})
.set(function (value){
    this._password = value;
});


UserSchema.virtual('passwordConfirmation')
.get(function (){
    return this._passwordConfirmation;
})
.set(function (value){
    if (this.password !== value){
        this.invalidate('password', 'Password and Password Confirmation must match!');        
    }
    this._passwordConfirmation = value;
});

//a helper attribute
//new virtual for the first and last name of the new user...
UserSchema.virtual('fullName')
.get(function (){
    return `${this.firstName} ${this.lastName}`
});


UserSchema.plugin(passportLocalMongoose, {
    usernameField: 'email'
});


module.exports = mongoose.model('User', UserSchema);