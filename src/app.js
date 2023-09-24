const express = require('express')
const dotenv = require('dotenv')
const indexRoutes = require('./routes/index.routes.js')
dotenv.config()
const {TestConnection} = require('./database/db.js')
const userRoutes = require('./routes/user.routes.js')
const morgan = require('morgan')
const path = require('node:path')
const app = express()


//const archivo_ejs = require('./views/index.ejs')

const PORT = process.env.PORT || 5000

app.use( express.json() )

// app.use( archivo_ejs)
app.use(indexRoutes )
app.use(userRoutes )

app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}));

//Plantilla
app.set("view engine", "ejs") // esto va siempre que se trabaje con plantillas

app.use(express.static(path.join(__dirname, 'public')))

app.set( "views", path.join(__dirname, "views") )


app.listen( PORT, () => 
    console.log( `servidor corriendo en puerto ${PORT}`))

// Test
TestConnection()



/*
app.get('/', (req, res) =>{
    res.send( 'hola')
    })

app.listen(3000, ()=>console.log( 'servidor puerto'))
*/