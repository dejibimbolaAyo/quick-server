const User = require('../api/models/hospitalModel');

exports.create = function (data) {
    return User.create(data);
};

exports.findOneById = function (query) {
    return User.findById(query);
};

exports.findAll = function (query) {
    return User.find(query);
} 