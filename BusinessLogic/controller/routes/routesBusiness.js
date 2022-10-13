const express = require("express")
const app = express()
const result = require("../helpers/ControllerBusiness")

//First Route
app.get("/",async(req,res)=>{
    let data =await result.Read()
    res.send(data)
})

module.exports=app