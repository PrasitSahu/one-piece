// imports
const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLID,
  GraphQLSchema,
} = graphql;
const { characterType, devilFruitType, crewType } = require("./getType");

// schema definition
const rootType = new GraphQLObjectType({
  name: "root",
  fields: {
    character: {
      type: characterType,
      args: {
        id: GraphQLID,
      },
      resolve(parent, args) {
        return null; // will be fixed when the data is fetched
      },
    },
    devil_fruit: {
      type: devilFruitType,
      args: {
        id: GraphQLID,
      },
      resolve(parent, args) {
        return null; // will be fixed when the data is fetched
      },
    },
    crew: {
      type: crewType,
      args: {
        id: GraphQLID
      },
      resolve(parent, args){
        return null; // will be fixed when the data is fetched
      }
    },
    characters: {
      type: new GraphQLList(characterType),
      resolve(parent, args) {
        return null; // will be fixed when the data is fetched
      },
    },
    devil_fruits: {
      type: new GraphQLList(devilFruitType),
      resolve(parent, args) {
        return null; // will be fixed when the data is fetched
      },
    },
    crews: {
      type: new GraphQLList(crewType),
      resolve(parent, args){
        return null; // will be fixed when the data is fetched
      }
    }
  },
});

// exports
module.exports = new GraphQLSchema({
  query: rootType,
});
