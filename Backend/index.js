import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import cors from "cors"

import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"


const app = express()

app.use(cors());
app.use(express.json())

dotenv.config();

const PORT =process.env.PORT || 4000;
const URL= process.env.MongoDBURL;

// mongodb connect
try{
    mongoose.connect(URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("connected to mongodb")
}catch{
   console.log("Error: ",error)
}

//route defining
app.use("/book",bookRoute)
app.use("/user", userRoute)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})