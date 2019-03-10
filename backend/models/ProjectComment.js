/**
 * ProjectComment Schema
 * @param sequelize
 * @param DataTypes
 * @returns {*}
 */


module.exports = (sequelize, DataTypes) => {
    const withPagination = require('sequelize-cursor-paginate');

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
        commentContent: {
            field: 'comment_content',
            type: DataTypes.STRING(300),
        },
        ynLike: {
            field: 'yn_like',
            type: DataTypes.STRING(1),
        },
        createdBy: {
            field: 'createdBy',
            type: DataTypes.STRING(50),
        },
    }, {
        tableName: `project_comment`
    });

    ProjectComment.associate = function(models) {
        ProjectComment.belongsTo(models.Project,{
            foreignKey: 'seqProject',
        });
    };

    const options = {
        methodName: 'paginate',
        primaryKeyField: 'seqProjectComment',
    };

    withPagination(options)(ProjectComment);
    return ProjectComment;
};