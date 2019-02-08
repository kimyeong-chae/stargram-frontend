/**
 * Star Schema
 * @param sequelize
 * @param DataTypes
 * @returns {*}
 */
module.exports = (sequelize, DataTypes) => {
    const Star = sequelize.define('Star', {
        seqHeartHist: {
            field: 'seq_star',
            type: DataTypes.INTEGER(8),
            autoIncrement: true,
            primaryKey: true
        },
    }, {
        tableName: `star`
    });

    Star.associate = function(models) {

    };

    return Star;
};