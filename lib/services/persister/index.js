const { persistUser } = require('./persistUser');
const { persistPhoto } = require('./persistPhoto');
const { persistText } = require('./persistText');
const { persistHashtag } = require('./persistHashtag');
const { deleteEntry } = require('./deleteEntry')



const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = process.env.DB_PORT || 27017;
const DB_NAME = process.env.DB_NAME || 'Saltbae';

/*const DB_HOST = process.env.DB_HOST || '192.168.99.100';
const DB_PORT = process.env.DB_PORT || 32768;
const DB_NAME = process.env.DB_NAME || 'Saltbae';*/

const CONNECTION_STRING = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

module.exports.persistUser = persistUser(CONNECTION_STRING);
module.exports.persistPhoto = persistPhoto(CONNECTION_STRING);
module.exports.persistText = persistText(CONNECTION_STRING);
module.exports.persistHashtag = persistHashtag(CONNECTION_STRING);
module.exports.deleteEntry = deleteEntry(CONNECTION_STRING);