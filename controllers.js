'use strict';

var Controllers = {};

Controllers.renderAdminPage = function (req, res, next) {
	res.render('admin/plugins/composer-pnlpal', {});
};

module.exports = Controllers;