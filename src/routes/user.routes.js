const userRoutes = require('express').Router();
const {ctlrUsers} = require('../controllers/user.controller.js')

// userRoutes.get('/user', ctlrUsers.saludo );
userRoutes.get('/user', ctlrUsers.getAllUsers );

userRoutes.post('/user', ctlrUsers.CreaMensaje )

userRoutes.delete('/borrar/:id', ctlrUsers.BorraMensaje )

userRoutes.put('/modificar/:id', ctlrUsers.ModificaMensaje )

// Render pantalla
userRoutes.get('/', (req, res) => {
    res.render('index')
    } )


/*
userRoutes.get('/user', (req, res) =>{
    res.send( 'probando lpm')}
 )

 */



//------------------


module.exports = userRoutes;