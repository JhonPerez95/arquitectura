import mongoose from 'mongoose'
import config from './index'

const { urlCnn } = config.db

const connectDb = async () => {
  try {
    await mongoose.connect(urlCnn, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
    })
    console.log('Base de datos conectada')
  } catch ({ message: error }) {
    console.log(`No se connecto a la base de datos  ${error}`)
  }
}

export default connectDb
