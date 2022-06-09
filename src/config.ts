import dotenv from 'dotenv'
dotenv.config();
console.log(process.env.PRIVADOS)

export default{
    MONGO_DATABASE: process.env.MONGO_DATABASE || 'mern-klasseg',
    MONGO_USER: process.env.MONGO_USER || 'admin',
    MONGO_PASSWORD: process.env.MONGO_ADMIN || 'ADMIN',
    MONGO_HOST: process.env.MONGO_HOST || 'localhost',
    PORT: process.env.PORT || '3000'
}