import { findByIdOrPhoneNo, findOne } from "../../services/customerService";
import { compareHash } from "../../helper/crypt";

const passport    = require('passport');
const JwtStrategy = require("passport-jwt").Strategy;
const LocalStrategy = require("passport-local").Strategy;
const { ExtractJwt } = require('passport-jwt');

passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken('authorization'),
    secretOrKey   : "JamiiSecretCodeShouldBeFromEnv"
}, async (req, payload, done) => {
    try {
        // find user
        const user =  await findByIdOrPhoneNo(payload.sub);
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
        usernameField: 'jamiiIdOrPhoneNo',
        passwordField: 'password'
    }, async (jamiiIdOrPhoneNo, password, done) => {
        try {
            const user = await findByIdOrPhoneNo({jamiiIdOrPhoneNo})
            // if user does not exist
            .then((user) => {
                const match = compareHash(password, user.password)
                if(match) {
                    console.log(user.password)
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

