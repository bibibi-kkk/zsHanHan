const dbRtns = require("./dbroutines");
var mongoose = require('mongoose');
const { userscoll, taskscoll } = require("./config");
const resolvers = {
  allusers: async () => {
    let db = await dbRtns.loadDB();
    return await dbRtns.findAll(db, userscoll, {}, {});
  },
  alltasks: async () => {
    let db = await dbRtns.loadDB();
    return await dbRtns.findAll(db, taskscoll, {}, {});
  },
  deleteuser: async args =>{
    let db = await dbRtns.loadDB();
    return await dbRtns.deleteOne(db, userscoll, {"_id" : mongoose.Types.ObjectId(args.id)});
  },
  deletetask: async args =>{
    let db = await dbRtns.loadDB();
    return await dbRtns.deleteOne(db, taskscoll, {"_id" : mongoose.Types.ObjectId(args.id)});
  },
  posttask: async args => {
    let db = await dbRtns.loadDB();
    let newTask = { taskdes: args.taskdes, parentid: args.parentid };
    let results = await dbRtns.addOne(db, taskscoll, newTask);
    return results.insertedCount === 1 ? user : null;
  },
  postuser: async args => {
    let db = await dbRtns.loadDB();
    let newUser = { nickname: args.nickname, password: args.password };
    let results = await dbRtns.addOne(db, userscoll, newUser);
    return results.insertedCount === 1 ? user : null;
  }
};

module.exports = { resolvers };
