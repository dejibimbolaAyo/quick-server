// Load .env into process.env
require('dotenv').config();

const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';

export const logStars = (message) => {
    console.info('****************');
    console.info(message);
    console.info('****************');
};

export const jwtSecret = env.JWT_SECRET;

export default {
    port: env.PORT || 8000,
    hostname: env.HOSTNAME || 'localhost'
};