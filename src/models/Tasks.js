import { DataTypes } from 'sequelize'
import Db from '../config/database'

const Task = Db.define('task', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

Task.sync()
  .then(() => console.log('Sync Successfull Task!'))
  .catch((err) => console.log(err))

export default Task
