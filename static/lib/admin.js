'use strict';
/* globals $, app, socket */

define('admin/plugins/composer-pnlpal', ['settings'], function(Settings) {

	var ACP = {};

	ACP.init = function() {
		Settings.load('composer-pnlpal', $('.composer-pnlpal-settings'));

		$('#save').on('click', function() {
			Settings.save('composer-pnlpal', $('.composer-pnlpal-settings'), function() {
				app.alert({
					type: 'success',
					alert_id: 'composer-pnlpal-saved',
					title: 'Settings Saved',
					message: 'Please reload your NodeBB to apply these settings',
					clickfn: function() {
						socket.emit('admin.reload');
					}
				});
			});
		});
	};

	return ACP;
});