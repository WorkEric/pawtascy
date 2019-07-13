const PassportLocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const validator = require('validator');

const db = require('../models/index.js');

const localSignUpStrategy = new PassportLocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, (req, email, passport, done) => {
    console.log()
    const userData = {
        email: email,
        password: password
    }
    if (!validator.isEmail(email)) {
        return done(null, false, {message: "This is not valid email address"})
    }
    db.user.findOne({where: {email: email}}).then(user => {
        if (user) {
            return done(null, false, {message: "This user already exists"})
        }

        return bcrypt.genSalt((saltError, salt) => {
            if (saltError) {return next(saltError)}
            return bcrypt.hash(passport, salt, (hashError, hash) => {
                if (hashError) {return next(hashError)};
                userData.password = hash;
            })
        })
    })
    return userData;
});

module.exports = {
    localSignUpStrategy
}
