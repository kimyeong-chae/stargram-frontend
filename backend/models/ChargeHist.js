/**
 * ChargeHist Schema
 * @param sequelize
 * @param DataTypes
 * @returns {*}
 */
module.exports = (sequelize, DataTypes) => {
    const ChargeHist = sequelize.define('ChargeHist', {
        seqChargeHist: {
            field: 'seq_charge_hist',
            type: DataTypes.INTEGER(8),
            autoIncrement: true,
            primaryKey: true
        },
        seqMember: {
            field: 'seq_member',
            type: DataTypes.INTEGER(8),
        },
        amtCharge: {
            field: 'amt_charge',
            type: DataTypes.INTEGER(12),
        },
        heartCharge: {
            field: 'heart_charge',
            type: DataTypes.INTEGER(10),
        },
        cdPg: {
            field: 'cd_pg',
            type: DataTypes.INTEGER(8),
        },
    }, {
        tableName: `charge_hist`
    });

    ChargeHist.associate = function(models) {
        ChargeHist.belongsTo(models.Member, {
            foreignKey: 'seqMember',
        })
    };

    return ChargeHist;
};