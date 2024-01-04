import express from "express"
import colors from "colors"
import dotenv from "dotenv";
import morgan from "morgan"
import cors from "cors";
import connectDB from "./config/db.js";
import authroute from "./routes/authroute.js";
import path from "path";
import { fileURLToPath } from "url";

//configure env
dotenv.config();
const app=express();

const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname,'./frontend/build')));


//database config
connectDB();


app.use("/api/v1/auth", authroute);

app.use('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'./frontend/build/index.html'));
  });

const PORT=process.env.port || 8080 ;

app.listen(PORT,()=>{
    console.log(`server started at PORT ${PORT}`.bgCyan.white);
});
