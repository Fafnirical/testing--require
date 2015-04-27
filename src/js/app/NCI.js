define(function(require) {
	var NCI = {
		version: require('./NCI/version'),
		asd: require('./NCI/version')
	};

	window.NCI = NCI;
	return NCI;
});
