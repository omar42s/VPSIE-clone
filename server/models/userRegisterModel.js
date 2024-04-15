const mongoose = require('mongoose');
const validator = require('validator');


const UserRegisterSchema= new mongoose.Schema({
    firstName:{
        type: String,
        required: [true, 'Please provide name'],
        minlength: 3,
        maxlength: 40,
    },
    lastName:{
        type: String,
        required: [true, 'Please provide name'],
        minlength: 3,
        maxlength: 40,
    },
    email: {
        type: String,
        required: [true, 'Please provide email'],
        validate: {
            validator: validator.isEmail,
            message:'Please provide valid email'
        },
    },
    password:{
        type : String,
        required: [true, 'Please provide password'],
        minlength: 8,
        validate: {
            validator: function(value) {
                 // Password must contain at least one uppercase letter, one digit, and one special character
                return /[A-Z]/.test(value) && /\d/.test(value) && /[@#\$%\^&\*]/.test(value);
            },
            message: 'Password must contain at least one uppercase letter and one digit'
        }
    }
 
    }
)

module.exports = mongoose.model('UserRegister',UserRegisterSchema);