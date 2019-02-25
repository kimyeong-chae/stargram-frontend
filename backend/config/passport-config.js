const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Model = require('../models');

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

passport.use(new LocalStrategy({
        usernameField: 'id',
        passwordField: 'name',
        passReqToCallback: true,
        session: true
    },
    (req, id, name, done) => {
        console.log('id : ',id);
        console.log('name : ',name);
        console.log('provider : ', req.body.provider);

        Model.Member.findOrCreate({
            where: {idMember: id},
            defaults: {
                nmJoinClass: req.body.provider,
                name: name,
            }
        }).then(user => {
            return done(null, { user: user[0] });
        }).catch(err => {
            return done(false, err);
        });

    })
);