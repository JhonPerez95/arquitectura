require('dotenv').config()

const config = {
  server: {
    port: process.env.PORT || 3000,
  },
  db: {
    urlCnn: process.env.URI_MONGO || 'localhost',
  },
}
export default config
