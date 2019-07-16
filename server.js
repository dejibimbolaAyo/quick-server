import config, { nodeEnv, logStars } from './config';
import mongoose from './database/config/connection';
import customerRouter from "./api/routers/customer";
import hospitalRouter from "./api/routers/hospital";
import authRouter from "./api/routers/authentication";
import passport from "passport";
import express from "express";

const server = express();
server.use('/api/v1/', customerRouter);
server.use('/api/v1/', hospitalRouter);
server.use('/api/v1/auth', passport.authenticate('passport-jwt', authRouter));

// Start server
server.listen(config.port, () => {
    console.info('Jamii API is started on', config.hostname +':'+ config.port);
});