const { buildSchema } = require("graphql");
const schema = buildSchema(`
type Query {
    allusers: [Users]
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
