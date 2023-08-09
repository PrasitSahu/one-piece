// imports
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID, GraphQLList } =
  graphql;

// schema definition
const characterType = (types) =>
  new GraphQLObjectType({
    name: "character",
    fields: () => ({
      id: GraphQLID,
      name: GraphQLString,
      df_id: GraphQLID,
      role: GraphQLString,
      description: GraphQLString,
      img: GraphQLString,
      crew_id: GraphQLID,
      more_df_ids: new GraphQLList(GraphQLID),
      height: GraphQLString,
      bounty: GraphQLInt,
      age: GraphQLInt,
      relation_id: GraphQLID,
      devil_fruit: {
        type: types.devilFruitType,
        resolve(parent, args) {
          const df_id = parent.df_id;
          return null; // will be fixed when the data is fetched
        },
      },
      crew: {
        type: types.crewType,
        resolve(parent, args){
          const crew_id = parent.crew_id
          return null; // will be fixed when the data is fetched
        }
      }
    }),
  });

// exports
module.exports = characterType;
