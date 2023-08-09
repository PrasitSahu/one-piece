const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

const crewType = (types) => new GraphQLObjectType({
    name: 'crew',
    fields: () => ({
        id: GraphQLID,
        name: GraphQLString,
        flag_logo: GraphQLString,
        captain_id: GraphQLID,
        description: GraphQLString,
        captain: {
            type: types.characterType,
            resolve(parent, args) {
                return null; // will be fixed when the data is fetched
            }
        }
    })
})

module.exports = crewType