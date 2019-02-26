const express = require('express');
const path = require('path');
const router = express.Router();
const Model = require('../models');

// AWS S3
const AWS = require("aws-sdk");
AWS.config.loadFromPath(__dirname + "/../config/awsconfig.json");
const s3 = new AWS.S3();
const multer = require("multer");
const multerS3 = require('multer-s3');
const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: "famence",
        key: function (req, file, cb) {
            const extension = path.extname(file.originalname);
            cb(null, 'profile/'+Date.now().toString() + extension)
        },
        acl: 'private',
    })
})

/**
 * 회원 조회
 */
router.get('/member/:idMember', (req, res ,next) => {
    Model.Member.findOne({
        where: {
            idMember: req.params.idMember,
        }
    }).then(member => {
        res.json(member);
    }).catch(err => {
        res.send(500, err);
    });
});

/**
 * 회원 프로필 등록 및 수정
 */
router.put('/member/:idMember/profile', upload.single("imgFile"), (req, res, next) => {
    let imgFile = req.file;
    console.log('imgFile : ',imgFile);
    Model.Member.update(
        { profileUrl: imgFile.key },
        { where: { idMember: req.params.idMember }}
    ).then(result => {
        res.send(200);
    }).catch(err => {
        res.send(500);
    });
});



module.exports = router;