/**
 * Member Schema
 * @param sequelize
 * @param DataTypes
 * @returns {*}
 */
module.exports = (sequelize, DataTypes) => {
    const HeartHist = sequelize.define('heart_hist', {
        seqHeartHist: {
            field: 'seq_heart_hist',
            type: DataTypes.INTEGER(8),
            autoIncrement: true,
            primaryKey: true
        },
        cdHeartHist: {
            field: 'cd_heart_hist',
            type: DataTypes.STRING(8),
        },
        heart: {
            field: 'heart',
            type: DataTypes.STRING(8)
        },
        heartBalance: {
            field: 'heart_balance',
            type: DataTypes.INTEGER(8)
        },
        createdAt: {
            field: 'create_at',
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    }, {
        tableName: `heart_hist`
    });

    HeartHist.associate = function(models) {

    };

    return HeartHist;
};