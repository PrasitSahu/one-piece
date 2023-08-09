// imports
const { Schema, model } = require("mongoose");

// schema definition
const characterSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  df_id: {
    type: Number,
    default: null
  },
  role: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  img: {
    type: String,
    required: true,
  },
  crew_id: {
    type: Number,
    default: null
  },
  more_df_ids: {
    type: [Number],
    default: []
  },
  height: {
    type: String,
    required: true,
  },
  bounty: {
    type: Number,
    default: 0
  },
  age: {
    type: Number,
    default: undefined
  },
  relation_id: Number,
});

// exports
module.exports = model("character", characterSchema);
