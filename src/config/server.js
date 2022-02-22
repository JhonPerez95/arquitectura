import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import routesAPI from '../routes'
import connect from './database'
const app = express()

// Middlewares
app.use(cors('*'))
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/api', routesAPI)
app.use('/', (req, res) => {
  res.json({
    success: true,
    message: 'API REST PRUEBA',
  })
})

// Database
connect()
export default app
