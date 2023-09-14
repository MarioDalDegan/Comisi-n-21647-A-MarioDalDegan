const User = require('../models/user.models.js')

const ctlrUsers = {};

// controlador para saludar
ctlrUsers.saludo = (req, res) => {
     res.send( "Controlador Saludo" );
    };


ctlrUsers.getAllUsers = async (req, res) =>{ 
    const users = await User.findAll()
    res.send( users );
    }

// Insert
ctlrUsers.CreaMensaje = async (req, res) => {
    const { titulo, contenido, link, fecha } = req.body
    
    const Posteo = {
        titulo:  titulo,
        contenido: contenido,
        link: link,
        fecha: FileSystemDirectoryHandle,
        };
    
    const nuevoPosteo = await  User.nuevoPosteo(Posteo);
    res.send(nuevoPosteo)
    }

// Delete
ctlrUsers.BorraMensaje = async (req, res) => {
    const {id} = req.params;
    
    try {
        const borraMensaje = await User.destroy({ where: {id: id} } ) ;
       
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
    const quePosteo = await User.findOne({ where:{id:id}})

    if ( ! quePosteo){
        return res.status(400).send({mensaje:'Posteo no encontrado'})
        } else {
            const datosPosteo = { 
                    titulo: titulo,
                    contenido: contenido,
                    link: link,
                    fecha: fecha };
            try {
            const modificaPosteo = await User.update( datosPosteo, {id:id} )
                return res.status(200).send({mensaje:'Posteo modificado'})
            } catch(error){
                return res.status(400).send({mensaje:'Imposible modificar'})  
            }
        }
    }
    




module.exports = {ctlrUsers};
