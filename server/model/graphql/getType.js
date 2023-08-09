const getCharacterType = require("./character");
const getDevilFruitType = require("./devil_fruit");
const getCrewType = require('./crew')

const types = {};

types.characterType = getCharacterType(types);
types.devilFruitType = getDevilFruitType(types);
types.crewType = getCrewType(types)

const { characterType, devilFruitType, crewType } = types;
module.exports = { characterType, devilFruitType, crewType };
