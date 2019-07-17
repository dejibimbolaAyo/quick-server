const appRoot = require('app-root-path');
const mongoose = require(`${appRoot}/database/config/connection`);
const crypt = require("../helper/crypt");

var Schema = mongoose.Schema;
const userSchema = new Schema({
    role: {
        ref: 'Role',
        type: mongoose.Schema.Types.ObjectId,
        // required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: 'string',
        unique: true,
        lowercase: true,
        trim: true,
        required: true
    },
    phone: {
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    status: {
        type: String
    },
    language: {
        ref: 'Language',
        type: mongoose.Schema.Types.ObjectId,
      
    },
    hash: {
        type: String,
        // required: true,
        select: false,
    },
    salt: {
        type: String,
        // required: true,
        select: false
    }
},
{
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

userSchema.virtual('id').get(function () {
    return this._id;
});

userSchema.set('toJSON', {
    virtuals: true
});
userSchema.set('toObject', {
    virtuals: true
});

userSchema.methods.generateSalt = (length) => {
    return crypt.getSalt(length);
}

userSchema.methods.hashPassword = (salt, password) => {
    const salted = salt+password;
    return crypt.getHash(salted);
}

userSchema.methods.comparePassword = (plainPassword) => {
    const salted = this.salt+plainPassword;
    return crypt.compareHash(salted, this.hash);
};

module.exports = mongoose.model('User', userSchema, 'users');