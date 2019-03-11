/**
 * 프로젝트 관련 router
 */
const express = require('express');

const router = express.Router();
const Model = require('../models');


/**
 * 프로젝트 리스트 조회
 */
router.get('/project', (req, res) => {
  Model.Project.findAll({
    where: {
      seqStar: req.query.seqStar,
    },
  }).then((project) => {
    res.json(project);
  }).catch((err) => {
    res.send(500, err);
  });
});

/**
 * 프로젝트 단건 조회
 */
router.get('/project/:seqProject', (req, res) => {
  Model.Project.findOne({
    where: {
      seqProject: req.params.seqProject,
    },
  }).then((project) => {
    res.json(project);
  }).catch((err) => {
    res.send(500, err);
  });
});

/**
 * 프로젝트 등록
 */
router.post('/project', (req, res) => {
  console.log('req.body : ', req.body);

  Model.Project.create({
    seqStar: req.body.seqStar,
    cntHeartGoal: req.body.cntHeartGoal,
    dtProjectStart: req.body.dtProjectStart,
    dtProjectEnd: req.body.dtProjectEnd,
    title: req.body.title,
    comment: req.body.comment,
    content: req.body.content,
    status: req.body.status,
  }).then((project) => {
    res.json(project);
  }).catch((err) => {
    res.send(500, err);
  });
});

/**
 * 프로젝트 수정
 */
router.put('/project/:seqProject', (req, res) => {
  console.log('req.body : ', req.body);

  Model.Project.update({
    cntHeartGoal: req.body.cntHeartGoal,
    dtProjectStart: req.body.dtProjectStart,
    dtProjectEnd: req.body.dtProjectEnd,
    title: req.body.title,
    comment: req.body.comment,
    content: req.body.content,
    status: req.body.status,
  }, {
    where: { seqProject: req.params.seqProject },
  }).then((project) => {
    res.json(project);
  }).catch((err) => {
    res.send(500, err);
  });
});

/**
 * 프로젝트 삭제
 */
router.delete('/project/:seqProject', (req, res) => {
  console.log('req.params.seqProject: ', req.params.seqProject);

  Model.Project.destroy({
    where: { seqProject: req.params.seqProject },
  }).then((result) => {
    console.log('project delete result : ', result);
    res.json({});
  }).catch((err) => {
    res.send(500, err);
  });
});


/**
 * 프로젝트 댓글 조회
 */
router.get('/project/:seqProject/projectComment', (req, res) => {
  const findOption = {
    where: {
      seqProject: req.params.seqProject,
    },
    order: [
      ['createdAt'],
    ],
    limit: req.query.pageSize ? parseInt(req.query.pageSize) : 5,
  };


  if (req.query.before) { findOption.before = req.query.before; }

  if (req.query.after) { findOption.after = req.query.after; }

  Model.ProjectComment.paginate(findOption).then((project) => {
    res.json(project);
  }).catch((err) => {
    res.send(500, err);
  });
});

module.exports = router;
