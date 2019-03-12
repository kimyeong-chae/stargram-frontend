const express = require('express');

const router = express.Router();
const axios = require('axios');
const Request = require('request');
const config = require('../config/config.json');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const Model = require('../models');

/**
 * jwt token 발급
 */
router.post('/auth/token', (req, res) => {
  if (req.body && req.body.id && req.body.name && req.body.provider) {
    const id = req.body.id;
    const name = req.body.name;
    const provider = req.body.provider;

    const secretKey = fs.readFileSync('jwtRS256.key');
    const token = jwt.sign({ id, name, provider }, secretKey, { algorithm: 'RS256', expiresIn: "1 days", issuer: "http://famence.com" });

    if (token) {
      Model.Member.findOrCreate({
        where: { idMember: id },
        defaults: {
          nmJoinClass: req.body.provider,
          name,
        },
      }).then(result => {
        const member = result[0];
        res.json({ token, member });
      }).catch(err => {
        console.log('POST /auth/token Error : ', err);
        res.sendStatus(500)
      });
    } else {
      console.log('POST /auth/token Token Is Null');
      res.sendStatus(500);
    }
  } else {
    res.sendStatus(400);
  }
});

/**
 * jwt token 검증 개발단계에서만 사용
 */
router.get('/auth/verify', (req, res) => {
  // read the token from header or url
  const token = req.headers['x-access-token'] || req.query.token

  // token does not exist
  if(!token) {
    return res.status(403).json({
      success: false,
      message: 'not logged in'
    })
  }

  // create a promise that decodes the token
  const publicKey = fs.readFileSync('jwtRS256.key.pub');
  // create a promise that decodes the token
  const p = new Promise(
    (resolve, reject) => {
      jwt.verify(token, publicKey, { algorithm: 'RS256'}, (err, decoded) => {
        if(err) reject(err)
        resolve(decoded)
      })
    }
  )

  // if token is valid, it will respond with its info
  const respond = (token) => {
    res.json({
      success: true,
      info: token
    })
  };

  // if it has failed to verify, it will return an error message
  const onError = (error) => {
    res.status(403).json({
      success: false,
      message: error.message
    })
  };

  // process the promise
  p.then(respond).catch(onError);
});


function facebookAuth(req, res) {
  axios.post('https://graph.facebook.com/v2.4/oauth/access_token', {
    client_id: config.auth.facebook.clientId,
    client_secret: config.auth.facebook.clientSecret,
    grant_type: 'authorization_code',
    code: req.body.code,
    redirect_uri: req.body.redirectUri,
  }, { 'Content-Type': 'application/json' }).then((response) => {
    console.log('responseJson : ', response);
    const responseJson = response.data;
    res.json(responseJson);
  }).catch((err) => {
    console.log('err: \n', err.response.headers['www-authenticate']);
    res.status(500);
  });
}

function googleAuth(req, res) {
  Request({
    method: 'post',
    url: 'https://accounts.google.com/o/oauth2/token',
    form: {
      code: req.body.code,
      client_id: config.auth.google.clientId,
      client_secret: config.auth.google.clientSecret,
      redirect_uri: req.body.redirectUri,
      grant_type: 'authorization_code',
    },
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
  }, (err, response, body) => {
    try {
      if (!err && response.statusCode === 200) {
        const responseJson = JSON.parse(body);
        console.log('responseJson : ', responseJson);
        res.json(responseJson);
      } else {
        res.status(response.statusCode).json(err);
      }
    } catch (e) {
      res.status(500).json(err || e);
    }
  });
}

function instagramAuth(req, res) {
  Request({
    method: 'post',
    url: 'https://api.instagram.com/oauth/access_token',
    form: {
      code: req.body.code,
      client_id: config.auth.instagram.clientId,
      client_secret: config.auth.instagram.clientSecret,
      redirect_uri: req.body.redirectUri,
      grant_type: 'authorization_code',
    },
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
  }, (err, response, body) => {
    try {
      if (!err && response.statusCode === 200) {
        const responseJson = JSON.parse(body);
        console.log('responseJson : ', responseJson);
        res.json(responseJson);
      } else {
        res.status(response.statusCode).json(err);
      }
    } catch (e) {
      res.status(500).json(err || e);
    }
  });
}
/**
 * social login callback
 */
router.post('/auth/:provider', (req, res) => {
  switch (req.params.provider) {
    case 'facebook':
      facebookAuth(req, res);
      break;
    case 'google':
      googleAuth(req, res);
      break;
    case 'instagram':
      instagramAuth(req, res);
      break;
    default:
      res.sendStatus(400);
      break;
  }
});


/**
 * 로그아웃
 */
router.get('/logout', (req, res) => {
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
