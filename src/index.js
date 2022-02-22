import app from './config/server'
import config from './config'


const { port } = config.server

app.listen(port , () => {
  console.log(`Server Start in PORT: ${port}`)
})