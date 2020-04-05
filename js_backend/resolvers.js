const dbRtns = require("./dbroutines");
const { userscoll } = require("./config");
const resolvers = {
  countries: async () => {
    let db = await dbRtns.loadDB();
    return await dbRtns.findAll(db, coll, {}, {});
  },
  postuser: async args => {
    let db = await dbRtns.loadDB();
    let newUser = { nickname: args.nickname, password: args.password };
    let results = await dbRtns.addOne(db, userscoll, newUser);
    return results.insertedCount === 1 ? user : null;
  }
};

module.exports = { resolvers };
