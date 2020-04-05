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
    nickname: String
    password: String
}
type Mutation {
    postuser(nickname: String, code: String) : User
    }
`);
module.exports = { schema };
