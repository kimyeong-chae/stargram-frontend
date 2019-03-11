/**
 * StarHeartHist Schema
 * @param sequelize
 * @param DataTypes
 * @returns {*}
 */
module.exports = (sequelize, DataTypes) => {
  const Star = sequelize.define('StarHeartHist', {
    seqStarHeart: {
      field: 'seq_star_heart',
      type: DataTypes.INTEGER(10),
      autoIncrement: true,
      primaryKey: true,
    },
    seqStar: {
      field: 'seq_star',
      type: DataTypes.INTEGER(8),
    },
    cdHeartHist: {
      // 10: 후원
      // 20: 환급
      field: 'cd_sponsor_heart',
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
    seqSponsor: {
      field: 'seq_member',
      type: DataTypes.INTEGER(8),
    },
    seqProject: {
      field: 'seq_project',
      type: DataTypes.INTEGER(8),
    },
  }, {
    tableName: 'star_heart_hist',
  });

  Star.associate = function (models) {

  };

  return Star;
};
