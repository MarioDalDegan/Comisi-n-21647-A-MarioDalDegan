const indexRoutes = require('express').Router()

// Render pantalla
indexRoutes.get('/foro', (req, res) => {
    res.render('foro.ejs')
    } )

indexRoutes.get('/agregar', (req, res) => {
    res.render('nuevo_posteo.ejs')
    } )

indexRoutes.get('/modificar', (req, res) => {
    res.render('modificar_posteo.ejs')
    } )

module.exports = indexRoutes;