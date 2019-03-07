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
        seqMember: {
            field: 'seq_member',
            type: DataTypes.INTEGER(8),
        }
    }, {
        tableName: `sponsor`
    });

    Sponsor.associate = function(models) {
        Sponsor.belongsTo(models.Member, {
            foreignKey: 'seqMember'
        });
    };

    return Sponsor;
};