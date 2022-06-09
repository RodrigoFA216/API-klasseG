import express from 'express'//me traigo express
import morgan from 'morgan'//morgan es para ver las peticiones en rt
import cors from 'cors'//este es para interconectar servidores
import config from './config'

import classRoutes from './routes/class.routes'

const app = express()//la declaro como función

app.set('port', config.PORT||3000);

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(classRoutes);

export default app;