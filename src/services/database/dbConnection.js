/**
 * coneccion con mysql utilizando el ORM Sequelize
 */

const dbConnection = async () => {
  require('./sequelize/index')
}

export default dbConnection
