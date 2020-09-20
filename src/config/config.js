const dotevn = require('dotenv');

const envFound = dotevn.config({ path: process.cwd() + '/../.env' });

if (envFound.error) {
    throw envFound.error;
}

module.exports = {
    port: parseInt(process.env.PORT, 10),
}