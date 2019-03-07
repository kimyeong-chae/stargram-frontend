/**
 * Member Schema
 * @param sequelize
 * @param DataTypes
 * @returns {*}
 */
module.exports = (sequelize, DataTypes) => {
    const SponsorHeartHist = sequelize.define('SponsorHeartHist', {
        seqStarSponsor: {
            field: 'seq_sponsor_heart',
            type: DataTypes.INTEGER(10),
            autoIncrement: true,
            primaryKey: true
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
            field: 'cd_sponsor_heart',
            type: DataTypes.STRING(8),
        },
        heart: {
            field: 'heart',
            type: DataTypes.INTEGER(10)
        },
        heartBalance: {
            field: 'heart_balance',
            type: DataTypes.INTEGER(12)
        },
        seqProject: {
            field: 'seq_project',
            type: DataTypes.INTEGER(8),
        },
    }, {
        tableName: `sponsor_heart_hist`
    });

    SponsorHeartHist.associate = function(models) {

    };

    return SponsorHeartHist;
};