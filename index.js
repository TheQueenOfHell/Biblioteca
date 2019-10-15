const express=require('express')
const app=express()
var bodyparser=require('body-parser')
var cookieparser=require('cookie-parser')
var generoRoute=require('./routes/generoRoute')
var path=require('path')
app.use(cookieparser())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extends:false}))
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname,"publica")))
app.listen(3000,function(){
    console.log('O servidor esta funcionado!')
})
app.use('/genero',generoRoute)