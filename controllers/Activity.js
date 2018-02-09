'use strict';

var url = require('url');

var Activity = require('./ActivityService');

module.exports.get_activity = function get_activity (req, res, next) {
  Activity.get_activity(req.swagger.params, res, next);
};
