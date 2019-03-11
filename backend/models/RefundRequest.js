/**
 * Refund Request Schema
 * @param sequelize
 * @param DataTypes
 * @returns {*}
 */
module.exports = (sequelize, DataTypes) => {
  const RefundRequest = sequelize.define('RefundRequest', {
    seqRefundRequest: {
      field: 'seq_refund_request',
      type: DataTypes.INTEGER(8),
      autoIncrement: true,
      primaryKey: true,
    },
    seqStar: {
      field: 'seq_star',
      type: DataTypes.INTEGER(8),
    },
    heartRequest: {
      field: 'heart_request',
      type: DataTypes.INTEGER(8),
    },
    cdRefundStatus: {
      field: 'cd_refund_status',
      type: DataTypes.STRING(8),
    },
    heartRefund: {
      field: 'heart_refund',
      type: DataTypes.INTEGER(8),
    },
    amtRefund: {
      field: 'amt_refund',
      type: DataTypes.INTEGER(11),
    },
    dtRefund: {
      field: 'dt_refund',
      type: DataTypes.DATE,
    },

  }, {
    tableName: 'refund_request',
  });

  RefundRequest.associate = function (models) {

  };

  return RefundRequest;
};
