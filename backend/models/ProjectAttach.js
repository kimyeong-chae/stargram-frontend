/**
 * ProjectAttach Schema
 * @param sequelize
 * @param DataTypes
 * @returns {*}
 */
module.exports = (sequelize, DataTypes) => {
  const ProjectAttach = sequelize.define('ProjectAttach', {
    seqProjectAttach: {
      field: 'seq_project_attach',
      type: DataTypes.INTEGER(8),
      autoIncrement: true,
      primaryKey: true,
    },
    seqProject: {
      field: 'seq_project',
      type: DataTypes.INTEGER(8),
    },
    cdAttach: {
      field: 'cd_attach',
      type: DataTypes.STRING(8),
    },
    urlAttach: {
      field: 'url_attach',
      type: DataTypes.STRING(150),
    },
  }, {
    tableName: 'project_attach',
  });

  ProjectAttach.associate = function (models) {
    ProjectAttach.belongsTo(models.Project, {
      foreignKey: 'seq_project',
      constraints: true,
    });
  };

  return ProjectAttach;
};
