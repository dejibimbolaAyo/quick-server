const env = process.env;

exports.nodeEnv = env.NODE_ENV || 'development';

exports.logStars = (message) => {
    console.info('****************');
    console.info(message);
    console.info('****************');
};

exports.jwtSecret = env.JWT_SECRET;

exports.server = {
    port: env.PORT || 9050,
    hostname: env.HOSTNAME || 'localhost'
};