const userRoutes = require('express').Router();
const {ctlrUsers} = require('../controllers/user.controller.js')


// userRoutes.get('/user', ctlrUsers.saludo );
userRoutes.get('/', ctlrUsers.getAllUsers );

userRoutes.post('/agregar', ctlrUsers.CreaMensaje )

userRoutes.delete('/borrar/:id', ctlrUsers.BorraMensaje )

userRoutes.put('/modificar/:id', ctlrUsers.ModificaMensaje )





module.exports = userRoutes;