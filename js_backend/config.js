const dotenv = require("dotenv");
dotenv.config();
module.exports = {
    atlas: process.env.DBURL,
    appdb: process.env.DB,
    userscoll: process.env.USERSCOLL,
    port: process.env.PORT,
    api: process.env.REQUEST
};