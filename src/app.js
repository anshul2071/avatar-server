import express from "express";
import cors from "cors";
import dotnenv from "dotenv";
import assetRoutes from "./routes/assets.js";
import avatarRoutes from './routes/avatar.js'

dotnenv.config();

const app = express();



app.use(cors({
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))
app.use(express.json());


//routing
app.use("/api/asset", assetRoutes);
app.use("/api/avatar", avatarRoutes);


export default app;