
import DAO from '../../services/database/sequelize/tasks/DataAccessObject'

const getTasks = async () => {
  return DAO.findAllTasks()
}

const getTask = async ({ id }) => {
  return DAO.findTaskById(id)
}

const createdTask = async (task) => {
  return DAO.createdTask(task)
}

const updatedTask = async (id, { description, state }) => {
  return DAO.updatedTask(id , { description, state })
}

const deleteTask = async ({ id }) => {
  return DAO.deleteTask(id)
}

export default {
  getTasks,
  getTask,
  createdTask,
  updatedTask,
  deleteTask,
}
