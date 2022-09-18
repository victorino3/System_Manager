const express = require('express')
const port = process.env.PORT
const cors = require('cors')
const app = express()

app.use(express.json())
//swagger docs
/*
const swaggerUi = require('swagger-ui-express');
const openApiDocumentation = require('./openApiDocumentation.json');
*/
//Set cors 
app.use(cors({credentials: true, origin: '*'}))


//routers call
const logicBusiness = require('../controller/routes/logicBusiness')

//app.use(logicBusiness)

//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiDocumentation));
//Port number
app.listen(port,()=>{console.log("Running on port " + port)})