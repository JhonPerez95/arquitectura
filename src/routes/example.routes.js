import { Router } from 'express'
import { getPrueba } from '../controllers/example.controller'

const routeExample = Router()

// add routes with controllers

// api/example/
routeExample.get('/test', getPrueba)

export default routeExample
