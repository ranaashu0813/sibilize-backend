import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import express from "express";
import pgRoute from "../server/routes/pg.js";
import nodemailer from "nodemailer";


const app= express();




app.use(bodyParser.json({limit:"30mb" ,extended: "true"}));
app.use(bodyParser.urlencoded({limit:"30mb" ,extended: "true"}));
app.use(cors());

app.use("/pg",pgRoute);

const MONGO ="mongodb+srv://manavajais:83ZC99hWA4VBaZqL@cluster0.xt3bkuw.mongodb.net/Sibilize?retryWrites=true&w=majority"

const PORT = process.env.PORT || 1234;
mongoose.connect(MONGO)
.then(()=>app.listen(PORT,()=>console.log("connect succesful")))
.catch((error)=>{console.log(error.message)});
