// require('dotenv').config()
import dotenv from 'dotenv'

import mongoose from "mongoose";
import connectDb from "./db/index.js";
import app from './app.js';

dotenv.config()

connectDb()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log("server started on port: ", process.env.PORT)
    })
})
.catch((err) => {
    console.log("MONGO Connection Error", err)
})


