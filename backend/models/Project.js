/**
 * Project Schema
 * @param sequelize
 * @param DataTypes
 * @returns {*}
 */
module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define('Project', {
        seqProject: {
            field: 'seq_project',
            type: DataTypes.INTEGER(8),
            autoIncrement: true,
            primaryKey: true
        },
        seqStar: {
            field: 'seq_star',
            type: DataTypes.INTEGER(8),
        },
        cntHeartGoal: {
            field: 'cnt_heart_goal',
            type: DataTypes.INTEGER(8),
        },
        dtProjectStart: {
            field: 'dt_project_start',
            type: DataTypes.DATE,
        },
        dtProjectEnd: {
            field: 'dt_project_end',
            type: DataTypes.DATE,
        },
        title: {
            field: 'title',
            type: DataTypes.STRING(300),
        },
        comment: {
            field: 'comment',
            type: DataTypes.STRING(500),
        },
        content: {
            field: 'content',
            type: DataTypes.STRING(2000),
        },
        status: {
            field: 'status',
            type: DataTypes.STRING(10),
        },
    }, {
        tableName: `project`
    });

    Project.associate = function(models) {

    };

    return Project;
};