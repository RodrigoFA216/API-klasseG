import app from './app'//me traigo desde ./app el modulo app
import './database'
app.listen(app.get('port'), ()=>{//escucha el puerto 3000 y luego
    console.log('server on port: ', app.get('port'))//Muestra el servidor
});
