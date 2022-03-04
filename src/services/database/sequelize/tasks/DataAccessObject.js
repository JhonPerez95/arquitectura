import Task from './models'

/**
 * Funcion que consulta todas las tareas en la DB
 * @returns array de tareas
 */
const findAllTasks = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const tasks = await Task.findAll()
      return resolve(tasks)
    } catch (error) {
      return reject(error)
    }
  })
}

/**
 * Funcion que consulta una tarea en la DB
 * @param {int} id de la tarea a consultar
 * @returns una tarea
 */
const findTaskById = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const task = await Task.findOne({ where: { id } })
      return resolve(task)
    } catch (error) {
      return reject(error)
    }
  })
}

/**
 * Funcion que guarda una tarea en la DB
 * @param {Objet} task con atributos para guardar
 * @returns una tarea
 */
const createdTask = (task) => {
  return new Promise(async (resolve, reject) => {
    try {
      const taskSaved = await Task.create(task)
      return resolve(taskSaved)
    } catch (error) {
      return reject(error)
    }
  })
}

/**
 * Funcion que actualiza una tarea en la DB
 * @param {Objet} task con atributos para actualizar
 * @returns una tarea
 */
const updatedTask = (id, task) => {
  return new Promise(async (resolve, reject) => {
    try {
      const taskUpdated = await Task.update(task, { where: { id } })
      if (!taskUpdated[0]) return resolve(false)
      return resolve(true)
    } catch (error) {
      return reject(error)
    }
  })
}

/**
 * Funcion que consulta una tarea en la DB
 * @param {int} id de la tarea a consultar
 * @returns una tarea
 */
const deleteTask = async (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const task = await Task.destroy({ where: { id } })
      return resolve(task)
    } catch (error) {
      return reject(error)
    }
  })
}
export default {
  findAllTasks,
  findTaskById,
  createdTask,
  updatedTask,
  deleteTask,
}
