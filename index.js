const express = require('express');


//Crear el servidor-Aplicación de express
const app = express();

//Rutas
app.use( '/api/auth', require('./routes/auth'));


app.listen(4000, () => {
    console.log(`servidor corriendo en puerto ${ 4000 }`);

    
});