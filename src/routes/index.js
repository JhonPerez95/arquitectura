import express from 'express'
import routeExample from './task.routes'

const app = express()

app.use('/task', routeExample)


export default app