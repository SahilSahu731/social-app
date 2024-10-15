// require('dotenv').config()
import dotenv from 'dotenv'

import mongoose from "mongoose";
import connectDb from "./db/index.js";

dotenv.config()

connectDb()


