// footballTeamController.js
// Import footballTeam model
FootballTeam = require('./footballTeamModel');
// Handle index actions
exports.index = function (req, res) {
    FootballTeam.get(function (err, footballTeams) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        else res.json({
            status: "success",
            message: "Teams retrieved successfully",
            data: footballTeams
        });
    });
};
// Handle create footballTeam actions
exports.new = function (req, res) {
    var footballTeam = new FootballTeam();
    footballTeam.name = req.body.name ? req.body.name : footballTeam.name;
    footballTeam.league = req.body.league;
    footballTeam.location = req.body.location;
    footballTeam.bestPlayer = req.body.bestPlayer;
// save the footballTeam and check for errors
    footballTeam.save(function (err) {
        if (err)
             res.json(err);
        else res.json({
            message: 'New footballTeam created!',
            data: footballTeam
        });
    });
};
// Handle view footballTeam info
exports.view = function (req, res) {
    FootballTeam.findById(req.params.footballTeam_id, function (err, footballTeam) {
        if (err)
            res.send(err);
        else res.json({
            message: 'footballTeam details loading..',
            data: footballTeam
        });
    });
};
// Handle update footballTeam info
exports.update = function (req, res) {
FootballTeam.findById(req.params.footballTeam_id, function (err, footballTeam) {
        if (err)
            res.send(err);
        else {
            footballTeam.name = req.body.name ? req.body.name : footballTeam.name;
            footballTeam.league = req.body.league ? req.body.league : footballTeam.league;
            footballTeam.location = req.body.location ? req.body.location : footballTeam.location;
            footballTeam.bestPlayer = req.body.bestPlayer ? req.body.bestPlayer : footballTeam.bestPlayer;
// save the footballTeam and check for errors
            footballTeam.save(function (err) {
                if (err)
                    res.json(err);
                else res.json({
                    message: 'FootballTeam Info updated',
                    data: footballTeam
                });
            });
        }
});
};
// Handle delete footballTeam
exports.delete = function (req, res) {
    FootballTeam.remove({
        _id: req.params.footballTeam_id
    }, function (err, footballTeam) {
        if (err)
            res.send(err);
        else res.json({
            status: "success",
            message: 'FootballTeam deleted'
        });
    });
};