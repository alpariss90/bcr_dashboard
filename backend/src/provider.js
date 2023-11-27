const config=require('./config')

const {Sequelize, QueryTypes}=require('sequelize')


const sequelize=new Sequelize('mysql://'+config.db.user+':'+config.db.password+'@'+config.db.host+':'+config.db.port+'/'+config.db.database)

module.exports={sequelize, QueryTypes}

