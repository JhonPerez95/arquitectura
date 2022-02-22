import express from 'express'
import routeExample from './example.routes'

const app = express()

app.use('/example', routeExample)


export default app