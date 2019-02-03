/**
 * Member Schema
 * @param sequelize
 * @param DataTypes
 * @returns {*}
 */
module.exports = (sequelize, DataTypes) => {
    const Member = sequelize.define('Member', {
        seqMember: {
            field: 'seq_member',
            type: DataTypes.INTEGER(8),
            autoIncrement: true,
            primaryKey: true
        },
        idMember: {
            field: 'idMember',
            type: DataTypes.STRING(50),
            unique: true
        },
        pwMember: {
            field: 'pw_member',
            type: DataTypes.STRING(128),
        },
        name: {
            field: 'name',
            type: DataTypes.STRING(50),
        },
        nickname: {
            field: 'nickname',
            type: DataTypes.STRING(30)
        },
        profileUrl: {
            field: 'profile_url',
            type: DataTypes.STRING(50),
        },
        email: {
            field: 'email',
            type: DataTypes.STRING(50)
        },
        status: {
            field: 'status',
            type: DataTypes.STRING(8)
        },
        dtReg: {
            field: 'dt_reg',
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }

    }, {
        tableName: `member`
    });

    Member.associate = function(models) {
    };

    return Member;
};