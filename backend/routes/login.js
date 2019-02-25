const express = require('express');
const path = require('path');
const router = express.Router();
const passport = require('passport');
const axios = require('axios');
const Request = require('request');
const OAuth = require('oauth');
const oauthSignature = require('oauth-signature');
const config = require('../config/config.json');


/**
 * 로그인
 */
router.post('/auth/login', passport.authenticate('local'), (req, res) => {
    if (req.user)
        res.send(200, req.user);
    else
        res.sendStatus(401);
})

/**
 * social login callback
 */
router.post('/auth/:provider', function(req, res){
    switch(req.params.provider) {
        case 'facebook':
            facebookAuth(req, res)
            break
        case 'google':
            googleAuth(req, res)
            break
        case 'instagram':
            instagramAuth(req, res)
            break
        default:
            res.sendStatus(400);
            break;
    }
});

function facebookAuth(req, res) {
    axios.post('https://graph.facebook.com/v2.4/oauth/access_token', {
        client_id: config.auth.facebook.clientId,
        client_secret: config.auth.facebook.clientSecret,
        grant_type: 'authorization_code',
        code: req.body.code,
        redirect_uri: req.body.redirectUri
    }, { 'Content-Type': 'application/json' }).then((response) => {
        var responseJson = response.data
        res.json(responseJson)
    }).catch((err) => {
        console.log('err: \n',err.response.headers['www-authenticate']);
        res.status(500);
    })
};

function googleAuth(req, res) {
    Request({
        method: 'post',
        url: 'https://accounts.google.com/o/oauth2/token',
        form: {
            code: req.body.code,
            client_id: config.auth.google.clientId,
            client_secret: config.auth.google.clientSecret,
            redirect_uri: req.body.redirectUri,
            grant_type: 'authorization_code'
        },
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        }
    }, function (err, response, body) {
        try {
            if (!err && response.statusCode === 200) {
                var responseJson = JSON.parse(body);
                res.json(responseJson)
            } else {
                res.status(response.statusCode).json(err)
            }
        } catch (e) {
            res.status(500).json(err || e)
        }
    })
};

function instagramAuth(req, res) {
    Request({
        method: 'post',
        url: 'https://api.instagram.com/oauth/access_token',
        form: {
            code: req.body.code,
            client_id: config.auth.instagram.clientId,
            client_secret: config.auth.instagram.clientSecret,
            redirect_uri: req.body.redirectUri,
            grant_type: 'authorization_code'
        },
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        }
    }, function (err, response, body) {
        try {
            if (!err && response.statusCode === 200) {
                var responseJson = JSON.parse(body)
                res.json(responseJson)
            } else {
                res.status(response.statusCode).json(err)
            }
        } catch (e) {
            res.status(500).json(err || e)
        }
    })
}

/**
 * 로그아웃
 */
router.get('/logout', (req, res) => {
   req.logout();
   res.sendStatus(200);
});

module.exports = router;
