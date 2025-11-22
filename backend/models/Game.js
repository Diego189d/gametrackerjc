const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const GameSchema = new Schema({
  name: { type: String, required: true },
  platform: { type: String, default: '' },
  status: { type: String, enum: ['Pendiente','Jugando','Completado'], default: 'Pendiente' },
  review: { type: String, default: '' },
  score: { type: Number, min: 0, max: 10 },
}, { timestamps: true });
module.exports = mongoose.model('Game', GameSchema);
