const { Sequelize, DataTypes } = require('sequelize');
const {sequelize} = require('../database/db.js')


/*
const User = sequelize.define(
    'User',
    {
        username:{
            type: DataTypes.STRING,
            allowNull: false
        }
    }

)

*/

// Sequelize.INTEGER, primaryKey:true},

const foroModel = sequelize.define( 'foro', {
    "id": {type:Sequelize.INTEGER, primaryKey:true, autoIncrement: true}, 
    "titulo": Sequelize.STRING,
    "contenido": Sequelize.STRING,
    "link": Sequelize.STRING,
    "fecha": {type:Sequelize.DATE, defaultValue: DataTypes.NOW}
    }, {
        tableName: 'foro'
     });



//console.log( foroModel === sequelize.models.USER )

foroModel.sync();

module.exports = foroModel;


// `sequelize.define` also returns the model
//console.log(User === sequelize.models.User); // true