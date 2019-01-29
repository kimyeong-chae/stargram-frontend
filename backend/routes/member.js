const express = require('express');
const path = require('path');
const router = express.Router();


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

router.get('/upload', function(req, res, next) {
    res.render('upload');
});

router.post('/upload', upload.single("imgFile"), function(req, res, next){
    let imgFile = req.file;
    //TODO 멤버 프로필 URL update
    res.json(imgFile);
})


module.exports = router;