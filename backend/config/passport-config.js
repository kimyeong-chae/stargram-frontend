const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const InstagramStrategy = require('passport-instagram').Strategy;
const Model = require('../models');

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

passport.use(new GoogleStrategy({
        clientID: '1086753375076-1ea7pch4mdb552069gqj20pm9k5fc4l8.apps.googleusercontent.com',
        clientSecret: 'ci0P5lKCTKwtZU7CSyZklOPj',
        callbackURL: "/login/callback/google"
    },
    (accessToken, refreshToken, profile, done) => {
        console.log("ACCESS:", accessToken);
        console.log("REFRESH:", refreshToken );
        console.log("PROFILE:", profile);

        Model.Member.findOrCreate({
            where: {idMember: profile.id},
            defaults: {
                nmJobClass: profile.provider,
                name: profile.displayName,
            }
        })

        return done(null, {user : profile.id});
    })
);

passport.use(new FacebookStrategy({
        clientID: '234277800791435',
        clientSecret: '0460d3d54d127e84ce0a9ee1ee5921e7',
        callbackURL: "/login/callback/facebook"
    },
    (accessToken, refreshToken, profile, done) => {
        console.log("ACCESS:", accessToken);
        console.log("REFRESH:", refreshToken);
        console.log("PROFILE:", profile);
        return done(null, {user: profile});
    }
));

passport.use(new InstagramStrategy({
        clientID: '58a00d5d1eb049e9a6a76941ef8a5f01',
        clientSecret: '1420d7d6b31e43b4ae5f3b35a3301f76',
        callbackURL: "/login/callback/instagram"
    },
    (accessToken, refreshToken, profile, done) => {
        console.log("ACCESS:", accessToken);
        console.log("REFRESH:", refreshToken);
        console.log("PROFILE:", profile);
        return done(null, {user: profile});
    }
));