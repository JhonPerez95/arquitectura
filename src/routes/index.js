import express from 'express'

import routeTask from '../api/tasks/routes'
import routeUser from '../api/users/routes'

const app = express()

// api/
app.use('/task', routeTask)
app.use('/user', routeUser)

export default app
