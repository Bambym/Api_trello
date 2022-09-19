const express = require("express");
const app = express()


const userRouter = require('./users/router')
const spaceRouter = require('./spaces/router')
const tableRouter = require('./tables/router')
const columnRouter = require('./columns/router')
const todosRouter = require('./todos/router')
const bodyParser = require('body-parser')
const cors = require('cors')


app.use(cors({origin:'http://localhost:3000'}))

app.use(bodyParser.json()) // for parsing application/json
// app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//app.use('/') middleware pour la route racine pour toute methode http


// app.get('/',(req,res)=>{
//     res.send("hello world")
// })
app.use('/users',userRouter)
app.use('/spaces',spaceRouter)
app.use('/tables',tableRouter)
app.use('/columns',columnRouter)
app.use('/todos',todosRouter)

// app.get("/users",(req,res)=>{
//     // const users = [
//     //     {
//     //         name:"ugo",
//     //         age : 25
//     //     },
//     //     {
//     //         name:"hakim",
//     //         age : 22
//     //     },
//     //     {
//     //         name:"damla",
//     //         age : 16
//     //     },
//     //     {
//     //         name:"francois",
//     //         age : 28
//     //     },
//     // ]
//     res.json(users)
// })
// app.get("/users/:name",(req,res)=>{
    
//     const name = req.params.name
 
//     res.send(`vous avez appelé ${name}`)
// })
// app.get("/users/:_id/:spacework",(req,res)=>{
//     const id = req.params._id
//     const spacework = req.params.spacework
       
// })
app.listen(5000,()=>{
    console.log('serveur connecté sur le port 5000');
})