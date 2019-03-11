/**
 * Member Schema
 * @param sequelize
 * @param DataTypes
 * @returns {*}
 */
const withPagination = require('sequelize-cursor-paginate');

module.exports = (sequelize, DataTypes) => {
  const HeartHist = sequelize.define('HeartHist', {
    seqHeartHist: {
      field: 'seq_heart_hist',
      type: DataTypes.INTEGER(10),
      autoIncrement: true,
      primaryKey: true,
    },
    seqSponsor: {
      field: 'seq_member',
      type: DataTypes.INTEGER(8),
    },
    cdHeartHist: {
      // 10: 충전
      // 20: 후원 대기
      // 30: 후원 확정
      // 90: 후원 취소
      field: 'cd_heart_hist',
      type: DataTypes.STRING(8),
    },
    heart: {
      field: 'heart',
      type: DataTypes.INTEGER(10),
    },
    heartBalance: {
      field: 'heart_balance',
      type: DataTypes.INTEGER(12),
    },
    seqProject: {
      field: 'seq_project',
      type: DataTypes.INTEGER(8),
    },
  }, {
    tableName: 'heart_hist',
  });

  HeartHist.associate = function (models) {

  };

  const options = {
    methodName: 'paginate',
    primaryKeyField: 'seqHeartHist',
  };

  withPagination(options)(HeartHist);
  return HeartHist;
};
