// imports
const { Schema, model } = require("mongoose");

// schema definition
const devilFruitSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  current_user_id: {
    type: Number,
    default: null
  },
  prev_user_ids: {
    type: [Number],
    default: []
  },
  description: {
    type: String,
    default: "",
  },
});

// exports
module.exports = model("devil_fruit", devilFruitSchema);
