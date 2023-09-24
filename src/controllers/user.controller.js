const MiPosteo = require('../models/user.models.js')
const express = require('express');
const app = express();

const ctlrUsers = {};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// controlador para saludar
ctlrUsers.saludo = (req, res) => {
     res.send( "Controlador Saludo" );
    };


ctlrUsers.getAllUsers = async (req, res) =>{ 
    const users = await MiPosteo.findAll()
    res.render( 'foro',{resultado: users} );
    }

// Insert

/*
app.post( '/agregar', async function (req, res) {

    const { titulo, contenido, link, fecha } = req.body;
    const nfecha = new Date();

    try {
            const nuevoPosteo = await  MiPosteo.create(
                {
                    titulo:  'titulo',
                    contenido: 'contenido',
                    link: 'link',
                    fecha: nfecha,
                    }
                );

                if (nuevoPosteo) {
                    res.send('Posteo agregado: ' + titulo);
                    return res.redirect('/');
                    }
                } catch (error) {
                    res.send( 'Imposible agregar: ' + error )

                }
    }) ;

*/


ctlrUsers.CreaMensaje = async (req, res) => {
    const { titulo, contenido, link, fecha } = req.body;

    const nuevoPosteo = await  MiPosteo.create({
            titulo:  'pepe',
            contenido: 'cont',
            link: 'ln',
            });
    }

    /*
    try {
        const nuevoPosteo = await  MiPosteo.create(
            {
                titulo:  titulo,
                contenido: contenido,
                link: link,
                fecha: nfecha,
                }
            );

        if( nuevoPosteo)
            res.send( 'Posteo agregado: ' + titulo )
            res.redirect('/')

        } catch (error) {
            res.send( 'Imposible agregar: ' + error )

        }
    
    }

   */

// Delete
ctlrUsers.BorraMensaje = async (req, res) => {
    const {id} = req.params;
    
    try {
        const borraMensaje = await MiPosteo.destroy({ where: {id: id} } ) ;
       
        if(borraMensaje){
                return res.status(200).send({mensaje: 'Posteo eliminado'})
            } else {
                return res.status(200).send({mensaje: 'No se encontró el posteo'})
            }
        } catch (error) {
            return res.status(400).send({mensaje: 'Error al eliminar Posteo'})
        }
    }


// Update
ctlrUsers.ModificaMensaje = async (req, res) => {
    const {id} = req.params;
    const { titulo, contenido, link, fecha } = req.body;

    //Select 
    const quePosteo = await MiPosteo.findOne({ where:{id:id}})

    if ( ! quePosteo){
        return res.status(400).send({mensaje:'Posteo no encontrado'})
        } else {
            const datosPosteo = { 
                    titulo: titulo,
                    contenido: contenido,
                    link: link,
                    fecha: fecha };
            try {
            const modificaPosteo = await MiPosteo.update( datosPosteo, {id:id} )
                return res.status(200).send({mensaje:'Posteo modificado'})
            } catch(error){
                return res.status(400).send({mensaje:'Imposible modificar'})  
            }
        }
    }
    




module.exports = {ctlrUsers};
