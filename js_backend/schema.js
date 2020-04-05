const { buildSchema } = require("graphql");
const schema = buildSchema(`
type Query {
countries: [Country],
    countrybycode(code: String): Country
    countrybyname(name: String): Country
}

type Country {
   name: String
   code: String
}
type Mutation {
    postcountry(name: String, code: String): Country
    }
`);
module.exports = { schema };
