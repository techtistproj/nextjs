
// Sequelize app
const dbconfig = require('../config/db_config')
console.log("sequelize with db connect")
const Sequelize = require("sequelize")
//****One database */
const sequelizedb = new Sequelize(dbconfig.DB, dbconfig.USER, dbconfig.PASSWORD, {
  host: dbconfig.HOST,
  dialect: dbconfig.dialect,

  pool: {
    max: dbconfig.pool.max,
    min: dbconfig.pool.min,
    acquire: dbconfig.pool.acquire,
    idle: dbconfig.pool.idle
  }
})

sequelizedb.authenticate()
.then(() => {
    console.log('connected..')
})
.catch(err => {
    console.log('Error'+ err)
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelizedb


db.userLogin = require('./user_login_modals')(sequelizedb, Sequelize)


db.sequelize.sync({ force: false })
  .then(() => {
    console.log('Database sync done!')
  })

module.exports = db