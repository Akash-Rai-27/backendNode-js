// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js"
import app from './app.js'

dotenv.config({
    path:'./env'
})

const port = process.env.PORT;

connectDB()


.then(()=>{


    app.on("error",(error)=>{
        console.log("Error : sky");
        throw error
    })


    app.listen(port || 5000 ,()=>{
        console.log(`SERVER is ACTIVE , running at port ${port}`)
    })

})
.catch((err)=>{
    console.log("Mongo db connection failed!! ",err)
})




















/*
import express from 'express'
const app = express()

;( async ()=>{
    try{

        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        app.on("error",(error)=>{
            console.log("error:",error)
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log("APP id listening : active");
        })


    }
    catch(error){
        console.error("ERROR:",error)
        throw err
    }
})()

*/