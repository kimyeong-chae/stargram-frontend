/**
 * Sponsor Schema
 * @param sequelize
 * @param DataTypes
 * @returns {*}
 */
module.exports = (sequelize, DataTypes) => {
    const Sponsor = sequelize.define('Sponsor', {
        seqSponsor: {
            field: 'seq_sponsor',
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