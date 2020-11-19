const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const highScoreSchema = new Schema({
   user:String,
   score: Number,
});
module.exports = mongoose.model('HighScore', highScoreSchema);