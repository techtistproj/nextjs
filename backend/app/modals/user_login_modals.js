//**Create user(student) Login Table***/
module.exports = (sequelizedb, Sequelize) => {
    const UserLoginTable = sequelizedb.define("master_user_login", {
        us_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        us_name: {
            type: Sequelize.STRING,
            allowNull: false,
            // unique: true
        },
        us_email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        us_city: {
            type: Sequelize.STRING,
            allowNull: false
        },

        us_created_date: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: new Date().toISOString()
        },
        us_updated_date: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: new Date().toISOString()
        }

    }, {

        freezeTableName: true,
        timestamps: false
    })
 
    return UserLoginTable
}