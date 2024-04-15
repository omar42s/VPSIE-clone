require ('dotenv').config();
require('express-async-errors');


const express = require('express');
const app = express();
const rateLimiter = require('express-rate-limit')
const helmet = require('helmet');
const xss = require('xss-clean');
const cors = require('cors');
 
 
const connectDB = require('./db/connectDb')
  
// routers
const authRouter= require ('./routes/authRoutes')

app.use(express.json()); 

app.set("trust proxy", 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    
  })
);


app.use(helmet());
app.use(cors());
app.use(xss());


app.use('/api/auth',authRouter)

   
  
const port = process.env.PORT || 3000;

const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port,()=>{
            console.log(`server is listening on ${port}`)
        })
    } catch (error) {
        console.log(error)
    } 
} 
start();

 