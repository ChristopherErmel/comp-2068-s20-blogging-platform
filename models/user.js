const mongoose = require('mongoose');

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

UserSchema.virtual('emailConfirmation')
//get data from form
.get(function (){
    return this._emailConfirmation;
})
//set form data
.set(function (value){
    this._emailConfirmation = value;
});

//new virtual for the first and last name of the new user...
UserSchema.virtual('fullName')
.get(function (){
    return `${this.firstName} ${this.lastName}`
});

module.exports = mongoose.model('User', UserSchema);