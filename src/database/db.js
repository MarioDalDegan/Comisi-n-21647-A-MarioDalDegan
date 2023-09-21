const {Sequelize} = require( 'sequelize' )


const DB_NAME = process.env.DB_NAME
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_HOST = process.env.DB_HOST
const DB_DIALECT = process.env.DB_DIALECT
const DB_PORT = process.env.DB_PORT


const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    dialect: DB_DIALECT,
    define: {
        timestamps:false,
    }
});


/*
const sequelize = new Sequelize( 'ap_mario', '****', '****', {
    host:'200.58.105.148',
    dialect:'mysql',
    define: {
            timestamps: false,
            freezeTableName: true
            }
        } )

*/
const TestConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Se pudo conectar a la base de datos.');
    } catch (error) {
        console.error('No se pudo conectar a la base de datos:', error);
    }
}

module.exports = { sequelize, TestConnection }