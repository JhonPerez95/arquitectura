import { request, response } from 'express'

/**
 * [GET]
 * @param {Reques} req
 * @param {Response} res
 */
const findAll = async (req = request, res = response) => {
  try {
    res.status(200).json({ ok: true, message: 'Array Users' })
  } catch (error) {}
}

/**
 * [GET]:id
 * @param {Reques} req
 * @param {Response} res
 */
const findById = async (req = request, res = response) => {
  try {
  } catch (error) {}
}

/**
 * [POST]
 * @param {Reques} req
 * @param {Response} res
 */
const created = async (req = request, res = response) => {
  try {
  } catch (error) {}
}

/**
 * [PUT]
 * @param {Reques} req
 * @param {Response} res
 */
const updateById = async (req = request, res = response) => {
  try {
  } catch (error) {}
}

/**
 * [DELETE]
 * @param {Reques} req
 * @param {Response} res
 */
const deleteById = async (req = request, res = response) => {
  try {
  } catch (error) {}
}

export default {
  findAll,
  findById,
  created,
  updateById,
  deleteById,


}
