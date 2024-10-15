import mongoose from "mongoose";
import { DATA_NAME } from "../constants.js";



const connectDb = async () => {
    try {
      const connectedData = await mongoose.connect(process.env.MONGO_URL+'/'+ DATA_NAME)
    //   console.log(connectedData)
      console.log('Mongo Connected on Host:', connectedData.connection.host)
        
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}


export default connectDb