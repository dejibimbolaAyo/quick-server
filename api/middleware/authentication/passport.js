const User = require("../../services/user");
const crypt = require("../../helper/crypt");

const passport    = require('passport');
const JwtStrategy = require("passport-jwt").Strategy;
const LocalStrategy = require("passport-local").Strategy;
const { ExtractJwt } = require('passport-jwt');

passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken('authorization'),
    secretOrKey   : process.env.JWT_SECRET
}, async (req, payload, done) => {
    try {
        // find user
        const user =  await User.findOneById(payload.sub);
        // if user does not exist
        if (!user) {
            return done(null, false)
        }
        // if user exists
        done(null, user)

    } catch (error) {
        done(error, false)
    }
}
));

passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
    }, async (username, password, done) => {
        try {
            const user = await User.findOneById({username})
            // if user does not exist
            .then((user) => {
                const match = crypt.compareHash(password, user.password)
                if(match) {
                    return match
                } 
            })
            .catch((e) => {
                if(!user) {
                    return done(null, false)
                }
            })
            // Verify that the password matches
        } catch (error) {
            console.log(error)
        }
            
    }
));

