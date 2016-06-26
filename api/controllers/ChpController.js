/**
 * ChpController
 *
 * @description :: Server-side logic for managing chps
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  getChps: function(req, res) {
    ChpService.getChps(function(chps) {
      return res.json(200, {success: true, data: chps});
    });
  },
};

