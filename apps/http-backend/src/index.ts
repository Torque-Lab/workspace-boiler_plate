
console.log("Running from:", process.cwd());
console.log("NODE_PATH:", process.env.NODE_PATH || 'not set');
console.log("NODE_ENV:", process.env.NODE_ENV || 'not set');
console.log("NODE_VERSION:", process.env.NODE_VERSION || 'not set');

import dotenv from "dotenv";
dotenv.config();


import express from "express";
import { prismaClient } from "@repo/db";
import {  } from "@repo/backend-common";
import { redisService } from "../services/redis.service";
import authRouter from "../routes/auth.routes";
import cookieParser from "cookie-parser";
import { sendEmail } from "../utils/auth/send_email";
import { Request, Response } from "express";
import authGoogleRouter from "../routes/auth.google.route";
import authGithubRouter from "../routes/auth.github.route";
import passport from "passport";
const app = express();
app.use(express.json());
const isDev=process.env.NODE_ENV==='developement';
if(!isDev){
  app.set("trust proxy", 1);
}
app.use(passport.initialize());
app.use(cookieParser());
app.use("/api/auth", authRouter,authGoogleRouter,authGithubRouter);
app.get("/api/health", (req:Request, res:Response) => {
  res.status(200).json({ message: "Server is running" });
})








async function startServer() {
  try {
    await redisService.connect();
    console.log('Connected to Redis from server boot...');
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}


startServer();

process.on('SIGTERM', async () => {
  console.log('SIGTERM received. Shutting down ......');
  try {
    await redisService.disconnect();
    console.log('Redis connection closed');
    process.exit(0);
  } catch (error) {
    console.error('Error during shutdown:', error);
    process.exit(1);
  }
});