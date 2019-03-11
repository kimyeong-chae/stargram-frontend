/**
 * 스타(인플루언서) 관련 router
 */
const express = require('express');

const router = express.Router();
const Model = require('../models');

/**
 * 스타 리스트 조회
 */
router.get('/star', (req, res) => {
  Model.Star.findAll({

  }).then((stars) => {
    res.json(stars);
  }).catch((err) => {
    res.send(500, err);
  });
});

/**
 * 스타 단건 조회
 */
router.get('/star/:seqStar', (req, res) => {
  Model.Star.findOne({
    where: { seqStar: req.params.seqStar },
  }).then((star) => {
    res.json(star);
  }).catch((err) => {
    res.send(500, err);
  });
});

/**
 * 스타 정보 등록
 */
router.post('/star', (req, res) => {
  Model.Star.save({
    // TODO req.body
  }).then((star) => {
    res.json(star);
  }).catch((err) => {
    res.send(500, err);
  });
});

/**
 * 스타 정보 수정
 */
router.put('/star/:seqStar', (req, res) => {
  Model.Star.update({
    // TODO req.body
  }, { where: { seqStar: req.params.seqStar },
  }).then((star) => {
    res.json(star);
  }).catch((err) => {
    res.send(500, err);
  });
});

/**
 * 스타 삭제
 */
router.delete('/star/:seqStar', (req, res) => {
  Model.Star.destroy({
    where: { seqStar: req.params.seqStar },
  }).then((star) => {
    res.json(star);
  }).catch((err) => {
    res.send(500, err);
  });
});
