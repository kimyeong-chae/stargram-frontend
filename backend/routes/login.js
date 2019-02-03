const express = require('express');
const path = require('path');
const router = express.Router();
const passport = require('passport');

/**
 * google login
 */
router.get('/login/google', passport.authenticate("google", {
    scope: ["profile", "email"]
}));

router.get('/login/callback/google', passport.authenticate("google", { failureRedirect: '/' }), (req, res, next) => {
    res.render('login', { title: 'Google Login Success'})
});

/**
 * facebook login
 */
router.get('/login/facebook', passport.authenticate("facebook"));

router.get('/login/callback/facebook', passport.authenticate("facebook", { failureRedirect: '/' }), (req, res, next) => {
    res.render('login', { title: 'Facebook Login Success'})
});

/**
 * instagram login
 */
router.get('/login/instagram', passport.authenticate("instagram"));

router.get('/login/callback/instagram', passport.authenticate("instagram", { failureRedirect: '/' }), (req, res, next) => {
    res.render('login', { title: 'Instagram Login Success'})
});

/**
 * 로그아웃
 */
router.get('/logout', (req, res) => {
   req.logout();
   res.send(200);
});

module.exports = router;