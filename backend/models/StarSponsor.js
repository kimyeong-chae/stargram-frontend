/**
 * StarSponsor Schema
 * @param sequelize
 * @param DataTypes
 * @returns {*}
 */
module.exports = (sequelize, DataTypes) => {
  const StarSponsor = sequelize.define('StarSponsor', {
    seqStarSponsor: {
      field: 'seq_star_sponsor',
      type: DataTypes.INTEGER(8),
      autoIncrement: true,
      primaryKey: true,
    },
    seqMember: {
      field: 'seq_member',
      type: DataTypes.INTEGER(8),
    },
    seqStar: {
      field: 'seq_star',
      type: DataTypes.INTEGER(8),
    },
    heart_sponsor_total: {
      field: 'heart_sponsor_total',
      type: DataTypes.INTEGER(8),
    },
  }, {
    tableName: 'star_sponsor',
  });

  StarSponsor.associate = function (models) {

  };

  return StarSponsor;
};
