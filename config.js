const env = process.env;
export const nodeEnv = env.NODE_ENV || 'development';

export const logStars = (message) => {
    console.info('****************');
    console.info(message);
    console.info('****************');
};

export const jwtSecret = 'SOMEsecret';

export default {
    port: env.PORT || 9050,
    hostname: env.HOSTNAME || 'localhost'
};