// footballTeamModel.js
var mongoose = require('mongoose');
// Setup schema
var footballTeamSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    league: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    bestPlayer: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export FootballTeam model
var FootballTeam = module.exports = mongoose.model('footballTeam', footballTeamSchema);
module.exports.get = function (callback, limit) {
    FootballTeam.find(callback).limit(limit);
}