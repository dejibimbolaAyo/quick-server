const User = require("../models/user");

exports.create = async function (data) {
    const user = await User.create(data);

    // Generate salt
    user.salt = await user.generateSalt(20);
    user.hash = await user.hashPassword(user.salt, data.password);

    user.save();

    return user;
};

exports.findOneById = function (query) {
    return User.findById(query);
};

exports.findAll = function (query) {
    return User.find(query);
} 