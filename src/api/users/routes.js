import { Router } from 'express'
import controller from './controller'

const routeUser = Router()

// api/task/
routeUser
  .get('/', controller.findAll)
  .post('/', controller.created)
  .get('/:id', controller.findById)
  .put('/:id', controller.updateById)
  .delete('/:id', controller.deleteById)

export default routeUser
