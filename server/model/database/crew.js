// imports
const { Schema, model } = require("mongoose");

// schema definition
const crewSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  flag_logo: {
    type: String,
    required: true,
  },
  captain_id: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
});

// exports
module.exports = model("crew", crewSchema);
