const passport = require('passport');
const appRoot = require('app-root-path');
require(`${appRoot}/api/middleware/authentication/passport`)

exports.protectRoute = passport.authenticate('jwt', {
    session: false
});