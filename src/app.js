const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const {TestConnection} = require('./database/db.js')
const userRoutes = require('./routes/user.routes.js')
const morgan = require('morgan')
const path = require('node:path')
const app = express()


app.use( express.json() )
app.use

// Test
TestConnection()

app.use(userRoutes )
app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}));

app.set('views', path.join(__dirname, 'views') )
//Plantilla
app.set('view engine', 'ejs') // esto va siempre que se trabaje con plantillas

app.listen( 3000, () => 
    console.log( 'servidor corriendo en puerto 3000'))

/*
app.get('/', (req, res) =>{
    res.send( 'hola')
    })

app.listen(3000, ()=>console.log( 'servidor puerto'))
*/