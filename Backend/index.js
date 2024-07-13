import express from 'express';
import 'dotenv/config.js';
import route1 from './Routes/route1.js';
import route2 from './Routes/route2.js';
import Connection from './Connection.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import route3 from './Routes/route3.js';
import { getUser,SessionId } from './Service/SessionId.js';
let mongodburl ;
// Connection
Connection(`${mongodburl}/Authentication`);

// Constants
const app = express();
const PORT = process.env.PORT || 8000;

// Middlewares
app.use(cors({
    origin: 'http://localhost:5173', // Your frontend URL
    credentials: true,
  }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/Signup', route1);
app.use('/Login', route2);

app.use((req,res,next)=>{
    const useruid = req.headers.cookie;
    SessionId.forEach((values,key)=>{
        console.log(key + ":" + values);
    })

    if(!useruid) return res.send({"Navigate" : "http://localhost:5173/login"});
    const USERID = getUser(useruid)
    if(!USERID) return  res.send({"Navigate" : "http://localhost:5173/login"});
    req.user = USERID;
 
    next();
})

app.use('/data', route3);

// Listening
app.listen(PORT, () => {
  console.log("Running on PORT:" + PORT);
});
