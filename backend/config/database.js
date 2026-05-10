const {Sequelize} = require('sequelize');
require('dotenv').config();

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD,{
    host : process.env.DB_host,
    dialect:'mariadb',
    logging:false,
    define: {
        timestamps: true
    }}
 )
 const connectdb = async()=>{
    try{
        await db.authenticate();
        console.log('connect sucessfully');
        
    }catch(err){
        console.error('connect failed');
 }}
module.exports = { db, connectdb };