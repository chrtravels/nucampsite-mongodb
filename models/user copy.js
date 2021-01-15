const mongoose = require('mongoose');
const passportlocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    admin: {
        type: Boolean,
        default: false
    }
});

userSchema.plugin(passportlocalMongoose);

module.exports = mongoose.model('User', userSchema);