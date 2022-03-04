import { Sequelize } from 'sequelize'
import config from '../../../config/index'

const { db: configDb } = config

const db = new Sequelize(configDb.database, configDb.user, configDb.pass, {
  host: configDb.host,
  port: '3306',
  dialect: 'mysql',
  dialectOptions: {
    dateStrings: true,
    typeCast: true,
    timezone: 'local',
  },
  timezone: 'America/Bogota',
})

export async function dbConnected(db) {
  try {
    await db.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

dbConnected(db)

export default db
