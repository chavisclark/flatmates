/* ENV Config
 ---------------------------------*/
function defaultConfig() {}

defaultConfig.DB_TYPE = 'MONGO';
defaultConfig.ENV = process.env.NODE_ENV || 'development';

module.exports = defaultConfig;
