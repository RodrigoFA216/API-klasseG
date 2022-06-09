import mongoose from 'mongoose'
import config from './config'

(async()=>{
    try {
        /*const mongooseOptions={
            useUnifiedTopology: true,
            useNewUrlParser: true,
            user: config.MONGO_USER,
            pass: config.MONGO_PASSWORD
        }*/
        const db= await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`/*mongooseOptions*/);//conectate a esa base de datos y si no está ps creala
        console.log('La base de datos ha sido conectada a: ', db.connection.name)
    } catch (error) {
        console.error(error)
    }
})()//truco para que cada vez que sea llamada la función se ejecute sola xd (no lo intenten en casa)