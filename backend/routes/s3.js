const express = require('express');

const router = express.Router();

const downloader = require('s3-download-stream');
const aws = require('aws-sdk');
const awsConfig = require('../config/awsconfig');

// config
const auth = {
  secretAccessKey: awsConfig.secretAccessKey,
  accessKeyId: awsConfig.accessKeyId,
};

const config = {
  client: new aws.S3(auth),
  concurrency: 6,
  params: {
    Bucket: awsConfig.bucket,
  },
};

router.get('/aws-image/profile/:fileName', (req, res) => {
  config.params.Key = `profile/${req.params.fileName}`;
  const img = downloader(config);
  img.pipe(res);
});

router.get('/aws-video/project/:fileName', (req, res) => {
  config.params.Key = `project/${req.params.fileName}`;
  const video = downloader(config);
  video.pipe(res);
});

module.exports = router;

