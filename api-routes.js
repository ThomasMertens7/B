// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});
// Import footballTeam controller
var footballTeamController = require('./footballTeamController');
// footballTeam routes
router.route('/footballTeams')
    .get(footballTeamController.index)
    .post(footballTeamController.new);
router.route('/footballTeams/:footballTeam_id')
    .get(footballTeamController.view)
    .patch(footballTeamController.update)
    .put(footballTeamController.update)
    .delete(footballTeamController.delete);
// Export API routes
module.exports = router;