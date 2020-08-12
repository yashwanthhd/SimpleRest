const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        default: 'test',
        required: true
    },
    age: {
        type: Number,
        trim: true,
        required: true,
        validate(value){
            if(value< 0) throw new Error('Not a valid Age!!!')
        }
    }
})

const userModel = mongoose.model('UserModel', userSchema)

module.exports = userModel;