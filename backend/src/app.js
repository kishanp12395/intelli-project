import express from 'express';
import cors from 'cors';


const app = express();

app.use(cors({
    origin: "http://localhost:5173",  // Allow requests from your React frontend
    credentials: true,  // Allow cookies and authentication headers
    methods: ["GET", "POST", "PUT", "DELETE"],  // Allowed request methods
    allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json({limit: '1mb'}));

app.use(express.urlencoded({extended: true, limit: '1mb'}));

app.use(express.static('public'));




//routes
import userRouter from './routes/user.routes.js';


//routes decleration
app.use("/api/v1/users", userRouter);


export {app};