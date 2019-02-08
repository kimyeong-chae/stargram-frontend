/**
 * Sponsor Schema
 * @param sequelize
 * @param DataTypes
 * @returns {*}
 */
module.exports = (sequelize, DataTypes) => {
    const Sponsor = sequelize.define('Sponsor', {
        seqHeartHist: {
            field: 'seq_refund_request',
            type: DataTypes.INTEGER(8),
            autoIncrement: true,
            primaryKey: true
        },
    }, {
        tableName: `sponsor`
    });

    Sponsor.associate = function(models) {

    };

    return Sponsor;
};