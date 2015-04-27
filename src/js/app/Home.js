define(function (require) {
	var NCI = require('./NCI');

	$(function () {
		$('body')
			.append('<div>HOME</div>');
	});
	NCI.version();
});
