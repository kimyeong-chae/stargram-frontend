/**
 * StarSponsor Schema
 * @param sequelize
 * @param DataTypes
 * @returns {*}
 */
module.exports = (sequelize, DataTypes) => {
    const StarSponsor = sequelize.define('StarSponsor', {
        seqHeartHist: {
            field: 'seq_star_sponsor',
            type: DataTypes.INTEGER(8),
            autoIncrement: true,
            primaryKey: true
        },
    }, {
        tableName: `star_sponsor`
    });

    StarSponsor.associate = function(models) {

    };

    return StarSponsor;
};