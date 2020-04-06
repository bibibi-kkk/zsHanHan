const { buildSchema } = require("graphql");
const schema = buildSchema(`
type Query {
    allusers: [User],
    alltasks: [Task]
}



type Task{
    taskdes: String
    parentid: String
}

type User {
    _id: String
    nickname: String
    password: String
}
type Mutation {
    deleteuser(id: String) : String,
    deletetask(id: String) : Task,
    postuser(nickname: String, password: String) : User,
    posttask(taskdes: String, parentid: String) : Task
    }
`);
module.exports = { schema };
