const appRoot = require('app-root-path');
const passport = require('passport');

require(`${appRoot}/api/middleware/authentication/passport`)
exports.protectRoute = passport.authenticate('jwt', {
    session: false
});