const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String },
    tracks: { type: [String], default: [] },
  },
  { timestamps: true },
);

module.exports = List = mongoose.model('List', ListSchema);
