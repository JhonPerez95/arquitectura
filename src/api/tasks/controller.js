import { request, response } from 'express'
import modelTask from './model'
/**
 * [GET]
 * @param {Reques} req
 * @param {Response} res
 */
const findAll = async (req = request, res = response) => {
  try {
    const tasks = await modelTask.getTasks()
    res.status(200).json({ ok: true, tasks })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error comunicarse con el Admin !' })
  }
}

/**
 * [GET]:id
 * @param {Reques} req
 * @param {Response} res
 */
const findById = async (req = request, res = response) => {
  const { id } = req.params
  try {
    const task = await modelTask.getTask({ id })
    if (!task)
      return res
        .status(404)
        .json({ ok: false, message: 'No se encontro ninguna tarea!' })

    res.status(200).json({ ok: true, task })
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ ok: false, message: 'Error comunicarse con el Admin !' })
  }
}

/**
 * [POST]
 * @param {Reques} req
 * @param {Response} res
 */
const created = async (req = request, res = response) => {
  const { description, state } = req.body
  try {
    const task = await modelTask.createdTask({ description, state })
    if (!task)
      return res
        .status(404)
        .json({ ok: false, message: 'No se pudo crear la tarea !' })

    res.status(200).json({ ok: true, task })
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ ok: false, message: 'Error comunicarse con el Admin !' })
  }
}

/**
 * [PUT]
 * @param {Reques} req
 * @param {Response} res
 */
const updateById = async (req = request, res = response) => {
  const { body, params } = req
  try {
    const result = await modelTask.updatedTask(params.id, { ...body })
    if (!result)
      return res
        .status(404)
        .json({ ok: false, message: 'No se pudo actualizar la tarea !' })

    res.status(200).json({ ok: true, message: 'Se actualizo la tarea !' })
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ ok: false, message: 'Error comunicarse con el Admin !' })
  }
}

/**
 * [DELETE]
 * @param {Reques} req
 * @param {Response} res
 */
const deleteById = async (req = request, res = response) => {
  const { id } = req.params
  try {
    const task = await modelTask.deleteTask({ id })
    if (!task)
      return res
        .status(404)
        .json({ ok: false, message: 'No se pudo eliminar la tarea!' })

    res.status(200).json({ ok: true, message: 'Se elimino la tarea!' })
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ ok: false, message: 'Error comunicarse con el Admin !' })
  }
}

export default {
  findAll,
  findById,
  created,
  updateById,
  deleteById,
}
