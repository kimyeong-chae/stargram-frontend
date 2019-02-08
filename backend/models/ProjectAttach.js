/**
 * ProjectAttach Schema
 * @param sequelize
 * @param DataTypes
 * @returns {*}
 */
module.exports = (sequelize, DataTypes) => {
    const ProjectAttach = sequelize.define('ProjectAttach', {
        seqHeartHist: {
            field: 'seq_project_attach',
            type: DataTypes.INTEGER(8),
            autoIncrement: true,
            primaryKey: true
        },
    }, {
        tableName: `project_attach`
    });

    ProjectAttach.associate = function(models) {

    };

    return ProjectAttach;
};