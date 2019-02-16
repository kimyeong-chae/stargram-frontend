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
            primaryKey: true
        },
    }, {
        tableName: `refund_request`
    });

    RefundRequest.associate = function(models) {

    };

    return RefundRequest;
};