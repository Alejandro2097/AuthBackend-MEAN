const  { response } = require('express');

//Crear un nuevo usuario
const crearUsuario =  (req, res = response) => {
    return res.json({
        ok: true,
        msg: 'Crear un usuario /new'
    });
};
const loginUsuario = (req, res) => {
    return res.json({
        ok: true,
        msg: 'Login de usuario /'
    });
}
const revalidarToken = (req, res) => {
    return res.json({
        ok: true,
        msg: 'Renew'
    });
}
module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}