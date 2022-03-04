import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet';

import routesAPI from '../routes'

const app = express()

// Middlewares
app.use(cors('*'))
app.use(morgan('dev'))
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/api', routesAPI)

// Database
require('./database')

export default app