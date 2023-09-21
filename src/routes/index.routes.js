const indexRoutes = require('express').Router()

// Render pantalla
indexRoutes.get('/', (req, res) => {
    res.render('index.ejs')
    } )

module.exports = indexRoutes;