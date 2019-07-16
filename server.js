import config, { nodeEnv, logStars } from './config';
import mongoose from './database/config/connection';
import userRouter from "./api/routers/user";
import passport from "passport";
import express from "express";

const server = express();
server.use('/api/v1/', userRouter);

// Start server
server.listen(config.port, () => {
    console.info('Quick server is started on', config.hostname +':'+ config.port);
});