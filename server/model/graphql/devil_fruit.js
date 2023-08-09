// imports
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;

// schema definition
const devilFruitType = (types) =>
  new GraphQLObjectType({
    name: "devil_fruit",
    fields: () => ({
      id: GraphQLID,
      name: GraphQLString,
      type: GraphQLString,
      img: GraphQLString,
      current_user_id: GraphQLID,
      prev_user_ids: new GraphQLList(GraphQLID),
      description: GraphQLString,
      prev_users: {
        type: new GraphQLList(types.characterType),
        resolve(parent, args) {
          return null; // will be fixed when the data is fetched
        },
      },
      current_user: {
        type: types.characterType,
        resolve(parent, args) {
          return null; // will be fixed when the data is fetched
        },
      },
    }),
  });

// exports
module.exports = devilFruitType;
