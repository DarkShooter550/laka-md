//Put
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
// LAKA-MD=tl5DhZyQ#Hy9UracRtM-W_3vMpILxOIzoWQo_RGALIDLrHqQBZr0
SESSION_ID: process.env.SESSION_ID || "LAKA-MD=tl5DhZyQ#Hy9UracRtM-W_3vMpILxOIzoWQo_RGALIDLrHqQBZr0",
// mongodb+srv://darkshooter550:kQIoUmay53jKPWYv@cluster0.m2hzt.mongodb.net/
MONGODB: process.env.MONGODB || "mongodb+srv://darkshooter550:kQIoUmay53jKPWYv@cluster0.m2hzt.mongodb.net/",
PREFIX: process.env.PREFIX || '.' ,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '94781121579' : process.env.OWNER_NUMBER,
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO
};
