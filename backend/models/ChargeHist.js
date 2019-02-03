/**
 * ChargeHist Schema
 * @param sequelize
 * @param DataTypes
 * @returns {*}
 */
module.exports = (sequelize, DataTypes) => {
    const ChargeHist = sequelize.define('ChargeHist', {
        seqHeartHist: {
            field: 'seq_charge_hist',
            type: DataTypes.INTEGER(8),
            autoIncrement: true,
            primaryKey: true
        },
    }, {
        tableName: `charge_hist`
    });

    ChargeHist.associate = function(models) {

    };

    return ChargeHist;
};