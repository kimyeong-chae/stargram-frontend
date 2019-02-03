/**
 * Project Schema
 * @param sequelize
 * @param DataTypes
 * @returns {*}
 */
module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define('Project', {
        seqHeartHist: {
            field: 'seq_project',
            type: DataTypes.INTEGER(8),
            autoIncrement: true,
            primaryKey: true
        },
    }, {
        tableName: `project`
    });

    Project.associate = function(models) {

    };

    return Project;
};