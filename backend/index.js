const express=require('express')
const bodyParser= require('body-parser')
const cors=require('cors')
const morgan= require('morgan')
const config=require('./src/config')
const prov=require('./src/provider')



const app=express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
app.use((req, res, next)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

require('./src/routes')(app)



app.listen(config.app_port, async (err)=>{

/*
    try {
        await prov.sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }*/

    console.log("App up at "+config.app_port);
})