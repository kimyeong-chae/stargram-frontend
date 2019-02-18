/**
 * ProjectComment Schema
 * @param sequelize
 * @param DataTypes
 * @returns {*}
 */
module.exports = (sequelize, DataTypes) => {
    const ProjectComment = sequelize.define('ProjectComment', {
        seqProjectComment: {
            field: 'seq_project_comment',
            type: DataTypes.INTEGER(8),
            autoIncrement: true,
            primaryKey: true
        },
        seqProject: {
            field: 'seq_project',
            type: DataTypes.INTEGER(8),
        },
        comment_content: {
            field: 'comment_content',
            type: DataTypes.STRING(300),
        },
        idReg: {
            field: 'id_reg',
            type: DataTypes.STRING(50),
        },
    }, {
        tableName: `project_comment`
    });

    ProjectComment.associate = function(models) {

    };

    return ProjectComment;
};