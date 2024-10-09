import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
<<<<<<< HEAD
import jobRoute from "./routes/job.route.js";
=======
>>>>>>> 35f12573d06c8c24b9ad35712196c6ec77136a47

dotenv.config({});

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOption = {
    origin:'http//localhost:5173',
    credentials:true
}

app.use(cors(corsOption));


const PORT = process.env.PORT || 3000;

app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
<<<<<<< HEAD
app.use("/api/v1/job", jobRoute);

=======
>>>>>>> 35f12573d06c8c24b9ad35712196c6ec77136a47


app.listen(PORT,()=>{
    connectDB();
    console.log(`server running at port ${PORT}`);
})